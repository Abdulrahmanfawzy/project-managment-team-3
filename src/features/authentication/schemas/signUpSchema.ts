import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, "Full name is required")
      .min(10, "Password must be at least 10 characters")
      .max(50, "Full name must be less than 50 characters")
      .trim(),

    email: z.email("Invalid email address").trim().lowercase(),

    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),

    password_confirmation: z.string().min(1, "ConfirmPassword is required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
