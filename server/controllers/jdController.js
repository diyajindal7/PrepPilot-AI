const { analyzeJobMatch } =
require("../services/geminiService");

const History =
require("../models/History");

const analyzeJD = async (req, res) => {
  try {

    const {
      resumeText,
      jobDescription,
      userId,
    } = req.body;

    const result =
      await analyzeJobMatch(
        resumeText,
        jobDescription
      );

    await History.create({
      userId,
      type: "Job Match",
      result,
    });

    res.json({
      result,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};



module.exports = {
  analyzeJD,
};