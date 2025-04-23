import { z } from "zod";

export const reviewSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  review: z.string().min(1, "Review cannot be empty"),
  comment: z.string().min(5, "Comment must be at least 5 characters"),
});