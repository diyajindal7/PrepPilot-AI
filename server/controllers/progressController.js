const History = require("../models/History");

const getProgress = async (req, res) => {

  const userId = req.params.userId;

  const history =
    await History.find({ userId });

  const atsCount =
    history.filter(
      h => h.type === "ATS Analysis"
    ).length;

  const jobCount =
    history.filter(
      h => h.type === "Job Match"
    ).length;

  const interviewCount =
    history.filter(
      h => h.type === "Interview Questions"
    ).length;

  const mockCount =
    history.filter(
      h => h.type === "Mock Interview"
    ).length;

  res.json({
    atsCount,
    jobCount,
    interviewCount,
    mockCount,
    totalActivities:
      history.length,
  });
};

module.exports = {
  getProgress,
};