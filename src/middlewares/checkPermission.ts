import { Request, Response, NextFunction } from "express";
import Role from "../models/role.model";

export default async function checkPermission(requiredPermission: string) {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const role = await Role.findById(req.user?.role).populate("permissions");
      const hasPermission = role?.permissions?.some(
        (p: any) => p.name === requiredPermission
      );
      if (!hasPermission) {
        return res
          .status(403)
          .json({ message: "Forbidden: Missing permission" });
      }
      next();
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Permission check failed", error: err });
    }
  };
}
