import { api } from "@/services/api";

import axios from "axios";

export async function getProfile() {
  try {
    const res = await api.get(`/profile`);
    console.log(res);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      throw error.response?.data || "An error occurred";
    }
  }
}
