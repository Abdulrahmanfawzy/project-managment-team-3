import { api } from "@/services/api";
import axios from "axios";

export async function getRecentActivities() {
  try {
    const res = await api.get("profile/activity?limit=15");

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
