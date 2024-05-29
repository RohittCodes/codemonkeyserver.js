import express from "express";
import { getExplanation } from "../controllers/codeChimp.js";
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

router.post("/chat", getExplanation);

export { router as codeChimpRoute };
