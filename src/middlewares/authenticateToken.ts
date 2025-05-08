import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET as string);
    next();
  } catch {
    res.sendStatus(403);
  }
};
