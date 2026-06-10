import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import ReactMarkdown from "react-markdown";

function Dashboard() {

  const [analysis, setAnalysis] = useState("");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold mb-4">
        Welcome {user?.name} 👋
      </h1>

      <h2 className="text-2xl mb-8">
        PrepPilot AI Dashboard
      </h2>

<div className="grid md:grid-cols-3 gap-6">
        <ResumeUpload
          setAnalysis={setAnalysis}
        />

        <div className="bg-white p-6 rounded-xl shadow">
          Job Description Upload
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Interview History
        </div>

      </div>

      {analysis && (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-8">
<h2 className="text-3xl font-bold mb-6 text-blue-600"> 
             ATS Analysis
            
          </h2>

          <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="mb-3">
        {children}
      </p>
    ),
    li: ({ children }) => (
      <li className="ml-6 list-disc mb-2">
        {children}
      </li>
    ),
  }}
>
  {analysis}
</ReactMarkdown>
        </div>
      )}

    </div>
  );
}

export default Dashboard;