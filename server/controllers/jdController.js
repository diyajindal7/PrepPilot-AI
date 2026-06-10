const { analyzeJobMatch } =
require("../services/geminiService");

const analyzeJD = async (req, res) => {
  try {

    const {
      resumeText,
      jobDescription,
    } = req.body;

    const result =
      await analyzeJobMatch(
        resumeText,
        jobDescription
      );

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