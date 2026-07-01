import axios from "axios";
import type { SignInFormData } from "../schemas/signInSchema";
import { publicApi } from "@/services/publicAPI";

export async function signIn(data: SignInFormData) {
  try {
    const res = await publicApi.post(`/login`, data);

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
