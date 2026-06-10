const {
  evaluateAnswer,
} = require("../services/geminiService");

const History =
require("../models/History");

const evaluate = async (
  req,
  res
) => {
  try {

    const {
      question,
      answer,
      userId,
    } = req.body;

    const result =
      await evaluateAnswer(
        question,
        answer
      );

    await History.create({
      userId,
      type: "Mock Interview",
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
  evaluate,
};