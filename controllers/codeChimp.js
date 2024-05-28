import { generativeAI } from "./gen-ai.js";

async function run(query) {
  const model = generativeAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(query);
  const response = result.response;
  return response.text();
}

export const getExplanation = async (req, res) => {
  const { prompt, codeSnippet } = req.body;
  console.log(prompt, codeSnippet);
  try {
    const explanation = await run(
      `Act as a coding assistant named CodeChimp, A Coding Monkey which interacts with a user. Given the prompt: ${prompt}, assist the user accordingly. The user may or may not provide an optional code snippet: ${codeSnippet}, which you should utilize if provided. If the code snippet is not provided, you should provide a general response for the query. Note: If the user is generally asking queries like, "Hii", "How are you?", "What is your name?", etc., you should greet him first, a single line response would be perfect.`
    );
    res.status(200).json({ explanation: explanation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
