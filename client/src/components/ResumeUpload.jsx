import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function ResumeUpload({ setAnalysis }) {
      const [file, setFile] = useState(null);
  
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Select a PDF first");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));


    const formData = new FormData();
    formData.append("resume", file);
    formData.append("userId", user.id);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      );

      setAnalysis(res.data.analysis);

    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">

      <h2 className="text-xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        {loading ? "Analyzing..." : "Upload Resume"}
      </button>

    
    </div>
  );
}

export default ResumeUpload;