import { api } from "@/services/api";

import axios from "axios";

export async function getMyFiles() {
  try {
    const res = await api.get(`/profile/files`);

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
