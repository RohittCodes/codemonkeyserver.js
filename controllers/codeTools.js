import { generativeAI } from "./gen-ai.js";

async function run(query) {
  const model = generativeAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(query);
  const response = result.response;
  return response.text();
}

export const optimizeCode = async (req, res) => {
  const { code, description } = req.body;
  try {
    const response = await run(
      `Stringify the given code: ${code} and after that optimize it for the problem description: ${description}. Note: Only send back the optimized code.`
    );
    res.status(200).json({ code: response });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const helpUser = async (req, res) => {
  const { description, code, tags, difficulty } = req.body;
  const query = `Help the user with the following code: ${code} for the problem description: ${description} with tags: ${tags}. Help should be of difficulty: ${difficulty}. Note: Don't send back the code just provide a description of how to solve the problem.`;
  try {
    const response = await run(query);
    res.status(200).json({ help: response });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const debugCode = async (req, res) => {
  const { code, description } = req.body;
  try {
    const response = await run(
      `Debug the following code: ${code} for the problem description: ${description}. Note: Only send back the debugged code.`
    );
    res.status(200).json({ code: response });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
