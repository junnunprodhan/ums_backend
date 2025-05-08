import { Request, Response } from "express";
import Course from "../models/course.model";

export const createCourse = async (req: Request, res: Response) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const getCourses = async (_: Request, res: Response) => {
  const courses = await Course.find();
  res.json(courses);
};
