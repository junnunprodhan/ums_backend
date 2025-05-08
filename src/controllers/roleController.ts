import { Request, Response } from "express";
import Role from "../models/role.model";
import Permission from "../models/permission.model";

export const createRole = async (req: Request, res: Response) => {
  try {
    const { name, permissionIds } = req.body;
    const permissions = await Permission.find({ _id: { $in: permissionIds } });
    const role = await Role.create({ name, permissions });
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ message: "Failed to create role", error });
  }
};

export const getRoles = async (_req: Request, res: Response) => {
  const roles = await Role.find().populate("permissions");
  res.status(200).json(roles);
};
