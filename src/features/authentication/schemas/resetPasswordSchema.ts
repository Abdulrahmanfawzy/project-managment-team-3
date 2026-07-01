import { z } from "zod";

export const resetPasswordSchema = z
  .object({
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

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
