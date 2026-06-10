import { useEffect, useState } from "react";
import axios from "axios";

function ProgressDashboard() {

  const [progress, setProgress] =
    useState(null);

  useEffect(() => {

    const fetchProgress =
      async () => {

        try {

          const user =
            JSON.parse(
              localStorage.getItem("user")
            );

          const res = await axios.get(
  `${`${import.meta.env.VITE_API_URL}/...`}/progress/${user.id}`
);

          setProgress(
            res.data
          );

        } catch (error) {

          console.log(error);

        }
      };

    fetchProgress();

  }, []);

  if (!progress) return null;

  return (
    <div className="grid md:grid-cols-5 gap-4 mb-8">

      <div className="bg-blue-500 text-white p-4 rounded-xl shadow">
        <h3>ATS</h3>
        <p className="text-3xl font-bold">
          {progress.atsCount}
        </p>
      </div>

      <div className="bg-green-500 text-white p-4 rounded-xl shadow">
        <h3>Job Match</h3>
        <p className="text-3xl font-bold">
          {progress.jobCount}
        </p>
      </div>

      <div className="bg-purple-500 text-white p-4 rounded-xl shadow">
        <h3>Questions</h3>
        <p className="text-3xl font-bold">
          {progress.interviewCount}
        </p>
      </div>

      <div className="bg-orange-500 text-white p-4 rounded-xl shadow">
        <h3>Mock</h3>
        <p className="text-3xl font-bold">
          {progress.mockCount}
        </p>
      </div>

      <div className="bg-slate-700 text-white p-4 rounded-xl shadow">
        <h3>Total</h3>
        <p className="text-3xl font-bold">
          {progress.totalActivities}
        </p>
      </div>

    </div>
  );
}

export default ProgressDashboard;