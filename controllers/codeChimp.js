import { generativeAI } from "./gen-ai.js";

async function run(query) {
  const model = generativeAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(data);
  const response = result.response;
  return response.text();
}

export const getExplanation = async (req, res) => {
  const { code, query } = req.body;
  try {
    const code = await run(`${code} ${query}`);
    res.status(200).json(code);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGeneratedCodeByQuery = async (req, res) => {
  const { query } = req.body;
  try {
    const code = await run(query);
    res.status(200).json(code);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
