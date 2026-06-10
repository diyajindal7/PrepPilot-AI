const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const analyzeResume = async (resumeText) => {
  try {

    const model = genAI.getGenerativeModel({
model: "gemini-2.5-flash-lite"
    });

   const prompt = `
Return your response in proper Markdown format.

Use:

# ATS Score

# Strengths

# Weaknesses

# Missing Skills

# Suggestions

Resume:

${resumeText}
`;

    const result = await model.generateContent(prompt);


return result.response.text();

  } catch (error) {

  if (error.status === 429) {
    return "Gemini API quota exceeded. Please try again later.";
  }

  throw error;

  }
};


const analyzeJobMatch = async (
  resumeText,
  jobDescription
) => {
  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
    });

    const prompt = `
You are an ATS Job Match Analyzer.

Compare the resume with the job description.

Provide:

1. Match Score out of 100
2. Matching Skills
3. Missing Skills
4. Suggestions to improve resume

Resume:
${resumeText}

Job Description:
${jobDescription}
`;

    const result =
      await model.generateContent(prompt);

    return result.response.text();

 } catch (error) {

  if (error.status === 429) {
    return "Gemini API quota exceeded. Please try again later.";
  }

  throw error;
}
};



const generateInterviewQuestions =
async (resumeText) => {

  try {

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.5-flash-lite",
      });

    const prompt = `
You are a technical interviewer.

Based on this resume generate:

# HR Questions
5 questions

# Technical Questions
10 questions

# Project Questions
5 questions

Resume:

${resumeText}
`;

    const result =
      await model.generateContent(
        prompt
      );

    return result.response.text();

  } catch (error) {

    if (error.status === 429) {
      return "Gemini API quota exceeded. Please try again later.";
    }

    throw error;
  }
};



const evaluateAnswer = async (
  question,
  answer
) => {

  try {

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.5-flash-lite",
      });

    const prompt = `
...
`;

    const result =
      await model.generateContent(
        prompt
      );

    return result.response.text();

  } catch (error) {

    if (error.status === 429) {
      return "Gemini API quota exceeded. Please try again later.";
    }

    throw error;
  }
};
const handleGeminiError = (error) => {

  if (error.status === 429) {
    return "Gemini API quota exceeded. Please try again later.";
  }

  throw error;
};

module.exports = {
  analyzeResume,
  analyzeJobMatch,
  generateInterviewQuestions,
  evaluateAnswer,
};