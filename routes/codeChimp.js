import express from "express";
import { getExplanation } from "../controllers/codeChimp.js";
import cors from "cors";

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/chat", getExplanation);

export { router as codeChimpRoute };
