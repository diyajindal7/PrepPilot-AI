const Resume = require("../models/Resume");
const Analysis = require("../models/Analysis");
const {
  analyzeResume,
} = require("../services/geminiService");
const fs = require("fs");
const pdfParse = require("pdf-parse");


const uploadResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const pdfBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdfParse(pdfBuffer);

    const resume = await Resume.create({
      userId: req.body.userId,
      fileName: req.file.originalname,
      resumeText: pdfData.text,
    });


    console.log("PDF Text Length:", pdfData.text.length);
console.log(pdfData.text.substring(0, 500));

    const analysisResult =
  await analyzeResume(pdfData.text);

await Analysis.create({
  userId: req.body.userId,
  result: analysisResult,
});

    res.status(201).json({
  message: "Resume analyzed successfully",
  extractedCharacters: pdfData.text.length,
  analysis: analysisResult,
});

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  uploadResume,
};