import express from "express";
import {
  getProblem,
  getProblems,
  getProblemsByTags,
  postProblem,
  runProblem,
  updateProblem,
} from "../controllers/problems.js";
import cors from "cors";

const router = express.Router();

router.use(
  cors({
    origin: "https://codemonkey-js.vercel.app", // Allow only this origin
    methods: ["GET", "POST", "PUT"], // Specify which methods are allowed
  })
);
router.use(express.json());

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/post", postProblem);
router.get("/fetch", getProblems);
router.get("/:id", getProblem);
router.put("/:id", updateProblem);
router.get("/p/tags", getProblemsByTags);
router.post("/run", runProblem);

export { router as problemRoute };
