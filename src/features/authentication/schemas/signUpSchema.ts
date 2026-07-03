import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, "Full name is required.")
      .min(10, "Password must be at least 10 characters.")
      .max(50, "Full name must be less than 50 characters.")
      .regex(/^[A-Za-z\s]+$/, {
        message: "Full name can only contain letters and spaces.",
      })
      .trim(),

    email: z.email("Invalid email address.").trim().lowercase(),

    password: z
      .string()
      .min(1, "Password is required.")
      .min(8, "Password must be at least 8 characters."),

    password_confirmation: z.string().min(1, "Confirm Password is required."),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match.",
    path: ["password_confirmation"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
