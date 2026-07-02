import { z } from "zod";

export const editProfileSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .max(50, "Full name must be less than 50 characters")
    .trim(),
  email: z.email("Invalid email address").trim().lowercase(),
  phone: z
    .string()
    .max(12, "Phone number must not exceed 12 digits.")
    .nullable()
    .optional(),
  job_title: z.string().nullable().optional(),
  experience_years: z.union([z.string(), z.number()]).optional().nullable(),
  availability_status: z.enum(["available", "unavailable"]),
  about: z.string().optional().nullable(),
});

export type EditProfileFormData = z.infer<typeof editProfileSchema>;
