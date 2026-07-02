import { z } from "zod";

export const editProfileSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(50, "Full name must be less than 50 characters")
    .trim(),
  email: z.email("Invalid email address").trim().lowercase(),
  phoneNumber: z.string().max(12, "Phone number must not exceed 12 digits."),
  jobTitle: z.string(),
  YOE: z.number(),
  currentTaP: z.string(),
});

export type EditProfileFormData = z.infer<typeof editProfileSchema>;
