import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: String,
    credits: { type: Number, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Course", courseSchema);
