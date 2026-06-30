import axios from "axios";
import type { VerifyAccountFormData } from "../schemas/verifyAccount";

const base_url = import.meta.env.VITE_API_URL;

export async function verifyAccount(data: VerifyAccountFormData) {
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
