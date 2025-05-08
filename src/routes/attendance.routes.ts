import express from "express";
import {
  markAttendance,
  getUserAttendance,
} from "../controllers/attendanceController";
const router = express.Router();

router.post("/mark", markAttendance);
router.get("/:userId", getUserAttendance);

export default router;
