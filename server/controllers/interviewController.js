console.log("Interview Controller Loaded");

const {
  generateInterviewQuestions,
} = require("../services/geminiService");

const generateQuestions = async (
  req,
  res
) => {
  try {

    const { resumeText } = req.body;

    const result =
      await generateInterviewQuestions(
        resumeText
      );

    res.json({
      result,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  generateQuestions,
};