import axios from "axios";
import type { SignInFormData } from "../schemas/signInSchema";

const base_url = import.meta.env.VITE_API_URL;

export async function signIn(data: SignInFormData) {
  try {
    const res = await axios.post(`${base_url}/login`, data);

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
