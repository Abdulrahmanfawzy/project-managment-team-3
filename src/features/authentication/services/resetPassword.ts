import axios from "axios";

import type { ResetPasswordFormData } from "../schemas/resetPasswordSchema";

const base_url = import.meta.env.VITE_API_URL;

export async function resetPassword(data: ResetPasswordFormData) {
  try {
    const res = await axios.post(`${base_url}/reset-password`, data);
    console.log(res);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
