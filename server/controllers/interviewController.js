

const {
  generateInterviewQuestions,
} = require("../services/geminiService");

const History =
require("../models/History");

const generateQuestions = async (
  req,
  res
) => {
  try {

    const { resumeText, userId } =
      req.body;

    const result =
      await generateInterviewQuestions(
        resumeText
      );

    await History.create({
      userId,
      type: "Interview Questions",
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
  generateQuestions,
};