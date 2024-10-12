import Problem from "../models/problems.js";
import dotenv from "dotenv";

dotenv.config();

const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;
const RAPID_API_HOST = process.env.RAPID_API_HOST;

export const postProblem = async (req, res) => {
  try {
    const {
      problem_id,
      title,
      description,
      difficulty,
      tags,
      testcases,
      templateCode,
    } = req.body;
    const problem = new Problem({
      problem_id,
      title,
      description,
      difficulty,
      tags,
      testcases,
      templateCode,
    });
    await problem.save();
    res.status(201).json({ message: "Problem created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.status(200).json(problems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProblem = async (req, res) => {
  const { id } = req.params;
  try {
    // The problem_id is the id here, Not _id which is the default id

    const problem = await Problem.findOne({ problem_id: id });
    res.status(200).json(problem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const runProblem = async (req, res) => {
  const { id, language, code } = req.body;

  // Convert the problem ID to a number
  const problemId = Number(id);

  // Check if the conversion resulted in a valid number
  if (isNaN(problemId)) {
    return res.status(400).json({ message: "Invalid problem ID" });
  }

  try {
    const problem = await Problem.findOne({ problem_id: problemId });

    // Check if problem was found
    if (!problem) {
      return res.status(404).json({ message: "Problem not found" });
    }

    const { testcases } = problem;
    const results = [];

    for (let i = 0; i < testcases.length; i++) {
      const { input, output } = testcases[i];

      const body = {
        language_id: getLanguageId(language), // Helper function to map language to Judge0 ID
        source_code: btoa(code), // Encode the code in base64
        stdin: btoa(""), // Encode the input in base64
      };

      const submissionUrl =
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true";

      const submissionResponse = await fetch(submissionUrl, {
        method: "POST",
        headers: {
          "X-RapidAPI-Key": JUDGE0_API_KEY,
          "X-RapidAPI-Host": RAPID_API_HOST,
          "content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const submissionData = await submissionResponse.json();

      const token = submissionData.token;

      const resultUrl = `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`;

      const resultResponse = await fetch(resultUrl, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": JUDGE0_API_KEY,
          "X-RapidAPI-Host": RAPID_API_HOST
        },
      });

      const resultData = await resultResponse.json();

      const outputData = atob(resultData.stdout).trim();

      // Remove \n and spaces from the output
      const expectedOutput = output.replace(/\s/g, "");
      const userOutput = outputData.replace(/\s/g, "");

      if (expectedOutput === userOutput) {
        results.push({ output: outputData, result: "Accepted" });
      } else {
        results.push({ output: outputData, result: "Wrong Answer" });
      }
    }
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLanguageId = (language) => {
  const languages = {
    javascript: 63,
    python: 71,
    java: 62,
    // Add more languages and their IDs as needed
  };
  return languages[language] || 63; // Default to JavaScript if not found
};

export const updateProblem = async (req, res) => {
  const { id } = req.params;
  const { title, description, difficulty, tags, testcases, templateCode } =
    req.body;
  try {
    const problem = await Problem.findOne({ problem_id: id });
    if (title) problem.title = title;
    if (description) problem.description = description;
    if (difficulty) problem.difficulty = difficulty;
    if (tags) problem.tags = tags;
    if (testcases) problem.testcases = testcases;
    if (templateCode) problem.templateCode = templateCode;
    await problem.save();
    res.status(200).json(problem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProblemsByTags = async (req, res) => {
  const { tags } = req.body;
  try {
    const problems = await Problem.find({ tags: { $all: tags } });
    res.status(200).json(problems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
