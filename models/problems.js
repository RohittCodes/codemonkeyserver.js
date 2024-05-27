import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    problem_id: { type: Number, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    tags: [String],
    testcases: [
      {
        input: [String],
        output: String,
      },
    ],
    templateCode: [
      {
        language: String,
        code: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
