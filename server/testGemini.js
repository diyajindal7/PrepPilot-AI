require("dotenv").config();

const {
  analyzeResume,
} = require("./services/geminiService");

(async () => {

 const result = await analyzeResume(`
DIYA JINDAL

Education:
National Institute of Engineering
B.E Computer Science
CGPA: 8.2

Skills:
Java
JavaScript
Node.js
Express.js
MongoDB
React
SQL

Projects:

CampusCommute
Built a secure ride-sharing platform for students using MERN stack, JWT authentication and AWS deployment.

PrepPilot AI
Built an AI-powered interview preparation platform with resume upload, ATS analysis and interview question generation.

Achievements:
Solved 200+ DSA problems.
Hackathon participant.
`);

  console.log(result);

})();