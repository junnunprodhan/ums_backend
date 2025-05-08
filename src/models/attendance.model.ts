import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  method: {
    type: String,
    enum: ["manual", "fingerprint", "facial"],
    required: true,
  },
  status: {
    type: String,
    enum: ["present", "absent", "late"],
    default: "present",
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Attendance", attendanceSchema);
