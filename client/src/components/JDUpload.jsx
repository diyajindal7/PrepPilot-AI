import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function JDUpload({ setJobMatch }) {

  const [jd, setJd] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {

    const resumeText = localStorage.getItem("resumeText");

    if (!resumeText) {
      alert("Upload Resume First");
      return;
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "`${`${import.meta.env.VITE_API_URL}/...`}/...`jd/analyze",
        {
          resumeText,
          jobDescription: jd,
        }
      );

      setResult(res.data.result);
setJobMatch(res.data.result);

    } catch (error) {

      console.log(error);
      alert("Analysis Failed");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Job Description Upload
      </h2>

      <textarea
        rows="8"
        placeholder="Paste Job Description Here..."
        className="w-full border p-3 rounded"
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      <button
        onClick={handleAnalyze}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        {loading ? "Analyzing..." : "Analyze Job Match"}
      </button>

     

    </div>
  );
}

export default JDUpload;