import express from "express";
import { debugCode, helpUser, optimizeCode } from "../controllers/codeTools.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/optimize", optimizeCode);
router.post("/help", helpUser);
router.post("/debug", debugCode);

export { router as codeToolsRoute };
