import express from "express";
import { debugCode, helpUser, optimizeCode } from "../controllers/codeTools.js";
import cors from "cors";

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/optimize", optimizeCode);
router.post("/help", helpUser);
router.post("/debug", debugCode);

export { router as codeToolsRoute };
