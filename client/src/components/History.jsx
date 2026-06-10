import { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [history, setHistory] =
    useState([]);

  useEffect(() => {

    const fetchHistory =
      async () => {

        try {

          const user =
            JSON.parse(
              localStorage.getItem("user")
            );

          const res =
            await axios.get(
              `import.meta.env.VITE_API_URL/history/${user.id}`
            );

          setHistory(res.data);

        } catch (error) {

          console.log(error);

        }
      };

    fetchHistory();

  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        History
      </h2>

      <div className="max-h-80 overflow-y-auto">

        {history.length === 0 ? (
          <p>No History Yet</p>
        ) : (

          history.map((item) => (

            

            <div
  key={item._id}
  className="border rounded p-3 mb-3"
>

  <h3 className="font-bold">
    {item.type}
  </h3>

  <p className="text-xs text-gray-500 mb-2">
    {new Date(
      item.createdAt
    ).toLocaleString()}
  </p>

  <div className="mt-2 text-sm">
  {item.result.slice(0, 150)}...
</div>

<details>
  <summary className="cursor-pointer text-blue-600 mt-2">
    View Full Result
  </summary>

  <div className="mt-2 text-sm max-h-40 overflow-y-auto">
    {item.result}
  </div>
</details>

</div>

          ))

        )}

      </div>

    </div>
  );
}

export default History;