import axios from "axios";

import type { ResetPasswordFormData } from "../schemas/resetPasswordSchema";
import { publicApi } from "@/services/publicAPI";

export async function resetPassword(data: ResetPasswordFormData) {
  try {
    const res = await publicApi.post(`/reset-password`, data);

    console.log(res);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
