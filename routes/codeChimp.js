import express from "express";
import { getExplanation } from "../controllers/codeChimp.js";
import cors from "cors";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use(cors());

router.post("/chat", getExplanation);

export { router as codeChimpRoute };
