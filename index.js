import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { codeToolsRoute } from "./routes/codeTools.js";
import { codeChimpRoute } from "./routes/codeChimp.js";
import { problemRoute } from "./routes/problemRoute.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());

mongoose.connect(MONGO_URI);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/problems", problemRoute);
app.use("/api/codechimp", codeChimpRoute);
app.use("/api/codetools", codeToolsRoute);
