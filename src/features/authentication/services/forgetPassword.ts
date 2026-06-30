import axios from "axios";
import type { ForgetPasswordFormData } from "../schemas/forgetPasswordSchema";

const base_url = import.meta.env.VITE_API_URL;

export async function forgetPassword(data: ForgetPasswordFormData) {
  try {
    const res = await axios.post(`${base_url}/forgot-password`, data);
    console.log(res);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
