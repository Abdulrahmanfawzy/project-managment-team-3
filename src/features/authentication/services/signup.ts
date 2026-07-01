import type { SignUpFormData } from "../schemas";
import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

export async function signup(data: SignUpFormData) {
  try {
    const res = await axios.post(`${base_url}/register`, data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
