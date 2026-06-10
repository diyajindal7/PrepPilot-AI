import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function InterviewPrep() {
  const [questions, setQuestions] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    const resumeText =
      localStorage.getItem("resumeText");

    if (!resumeText) {
      alert("Upload Resume First");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/interview/generate",
        {
          resumeText,
        }
      );

      setQuestions(res.data.result);

    } catch (error) {

      console.log(error);
      alert("Failed");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Interview Preparation
      </h2>

      <button
        onClick={generateQuestions}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        {loading
          ? "Generating..."
          : "Generate Questions"}
      </button>

      {questions && (
        <div className="mt-4 max-h-[500px] overflow-y-auto">
          <ReactMarkdown>
            {questions}
          </ReactMarkdown>
        </div>
      )}

    </div>
  );
}

export default InterviewPrep;