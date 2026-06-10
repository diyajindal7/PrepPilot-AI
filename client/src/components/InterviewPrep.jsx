import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function InterviewPrep() {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [result, setResult] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const generateQuestion = () => {

    const questions = [
      "What is JWT?",
      "Explain React Hooks.",
      "What is MongoDB?",
      "Difference between SQL and NoSQL?",
      "Explain REST API.",
      "What is Node.js?",
      "What is RAG?",
      "What is AWS EC2?",
    ];

    const randomQuestion =
      questions[
        Math.floor(
          Math.random() *
          questions.length
        )
      ];

    setQuestion(randomQuestion);
  };

  const evaluateAnswer =
    async () => {

      if (!answer) {
        alert("Enter answer");
        return;
      }
const user =
JSON.parse(
  localStorage.getItem("user")
);
      try {

        setLoading(true);
         

const res =
await axios.post(
  "`${`${import.meta.env.VITE_API_URL}/...`}/...`mock/evaluate",
  {
    question,
    answer,
    userId: user.id,
  }
);

        setResult(
          res.data.result
        );

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Interview Preparation
      </h2>

      <button
        onClick={generateQuestion}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Generate Question
      </button>

      {question && (
        <>
          <h3 className="mt-4 font-bold">
            {question}
          </h3>

          <textarea
            rows="6"
            className="w-full border p-3 rounded mt-3"
            placeholder="Write your answer..."
            value={answer}
            onChange={(e) =>
              setAnswer(
                e.target.value
              )
            }
          />

          <button
            onClick={
              evaluateAnswer
            }
            className="bg-green-600 text-white px-4 py-2 rounded mt-3"
          >
            {loading
              ? "Evaluating..."
              : "Submit Answer"}
          </button>
        </>
      )}

      {result && (
        <div className="mt-6 border rounded p-4 max-h-96 overflow-y-auto">

          <ReactMarkdown>
            {result}
          </ReactMarkdown>

        </div>
      )}

    </div>
  );
}

export default InterviewPrep;