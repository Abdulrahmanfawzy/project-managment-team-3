import { api } from "@/services/api";
import axios from "axios";

export async function getDoneTasks() {
  try {
    const res = await api.get("/profile/tasks?classification=done");
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
