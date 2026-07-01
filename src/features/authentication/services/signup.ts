import { publicApi } from "@/services/publicAPI";
import type { SignUpFormData } from "../schemas/signUpSchema";
import axios from "axios";

export async function signup(data: SignUpFormData) {
  try {
    const res = await publicApi.post(`/register`, data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
