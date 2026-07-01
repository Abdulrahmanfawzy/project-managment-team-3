import { z } from "zod";

export const verifyAccountSchema = z.object({
  OTP: z.string().min(1, "OTP is required.").max(4, "Invalid OTP").trim(),
});

export type VerifyAccountFormData = z.infer<typeof verifyAccountSchema>;
