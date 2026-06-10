require("dotenv").config();


const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const jdRoutes =
require("./routes/jdRoutes");

const interviewRoutes =
require("./routes/interviewRoutes");
const historyRoutes =
require("./routes/historyRoutes");


connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/jd", jdRoutes);
app.use(
  "/api/interview",
  interviewRoutes
);

app.use("/api/history", historyRoutes);



app.get("/", (req, res) => {
  res.send("PrepPilot AI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});