import axios from "axios";
import type { ForgetPasswordFormData } from "../schemas/forgetPasswordSchema";
import { publicApi } from "@/services/publicAPI";

export async function forgetPassword(data: ForgetPasswordFormData) {
  try {
    const res = await publicApi.post(`/forgot-password`, data);

    console.log(res);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
