const {
  evaluateAnswer,
} = require("../services/geminiService");

const evaluate = async (
  req,
  res
) => {
  try {

    const {
      question,
      answer,
    } = req.body;

    const result =
      await evaluateAnswer(
        question,
        answer
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
  evaluate,
};