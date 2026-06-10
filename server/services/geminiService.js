const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log(process.env.GEMINI_API_KEY);
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
    console.error(error);
    throw error;
  }
};

module.exports = {
  analyzeResume,
};