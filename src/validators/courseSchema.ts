import { z } from "zod";

export const createCourseSchema = z.object({
  name: z.string().min(3),
  departmentId: z.string().length(24),
  credits: z.number().min(1).max(10),
});
