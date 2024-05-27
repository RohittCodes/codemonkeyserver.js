import express from "express";
import {
  getExplanation,
  getGeneratedCodeByQuery,
} from "../controllers/codeChimp.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/explanation", getExplanation);
router.get("/generatedCode", getGeneratedCodeByQuery);

export { router as codeChimpRoute };
