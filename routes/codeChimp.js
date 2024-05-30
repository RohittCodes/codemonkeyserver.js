import express from "express";
import { getExplanation } from "../controllers/codeChimp.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/chat", getExplanation);

export { router as codeChimpRoute };
