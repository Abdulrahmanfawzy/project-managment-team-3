import { z } from "zod";

export const forgetPasswordSchema = z.object({
  email: z.email("Invalid email address").trim().lowercase(),
});

export type ForgetPasswordFormData = z.infer<typeof forgetPasswordSchema>;
