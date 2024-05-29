import express from "express";
import { debugCode, helpUser, optimizeCode } from "../controllers/codeTools.js";
import cors from "cors";

const router = express.Router();

router.use(express.json());

app.use(
  cors({
    origin: "https://codemonkey-js.vercel.app", // Allow only this origin
    methods: ["GET", "POST", "PUT"], // Specify which methods are allowed
  })
);

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/optimize", optimizeCode);
router.post("/help", helpUser);
router.post("/debug", debugCode);

export { router as codeToolsRoute };
