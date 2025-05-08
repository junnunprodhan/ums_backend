import { Request, Response } from "express";
import Attendance from "../models/attendance.model";

export const markAttendance = async (req: Request, res: Response) => {
  try {
    const { userId, method, status } = req.body;
    const attendance = await Attendance.create({
      user: userId,
      method,
      status,
    });
    res.status(201).json(attendance);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to record attendance", details: error });
  }
};

export const getUserAttendance = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const records = await Attendance.find({ user: userId });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error });
  }
};
