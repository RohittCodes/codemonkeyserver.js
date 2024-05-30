import express from "express";
import { debugCode, helpUser, optimizeCode } from "../controllers/codeTools.js";

const router = express.Router();

import cors from "cors";

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use(cors());

router.post("/optimize", optimizeCode);
router.post("/help", helpUser);
router.post("/debug", debugCode);

export { router as codeToolsRoute };
