import { api } from "@/services/api";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

export async function getProfile() {
  try {
    const res = await api.get(`${base_url}/profile`);
    console.log(res);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
