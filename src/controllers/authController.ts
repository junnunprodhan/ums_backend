import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { registerSchema, loginSchema } from "../validators/authSchema";
import User from "../models/user.model";

export const register = async (req: any, res: any) => {
  try {
    const validated = registerSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(validated.password, 10);

    const user = await User.create({
      ...validated,
      password: hashedPassword,
    });

    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const validated = loginSchema.parse(req.body);
    const user = await User.findOne({ email: validated.email });

    if (
      !user ||
      !user.password ||
      !(await bcrypt.compare(validated.password, user.password))
    ) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
    res.status(400).json({ error });
  }
};
