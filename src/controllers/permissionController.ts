import { Request, Response } from "express";
import Permission from "../models/permission.model";

export const createPermission = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const permission = await Permission.create({ name, description });
    res.status(201).json(permission);
  } catch (error) {
    res.status(400).json({ message: "Failed to create permission", error });
  }
};

export const getPermissions = async (_req: Request, res: Response) => {
  const permissions = await Permission.find();
  res.status(200).json(permissions);
};
