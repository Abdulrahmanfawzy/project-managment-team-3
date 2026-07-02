import { api } from "@/services/api";

import axios from "axios";
import type { UserProfile } from "../types";

export async function getProfile(): Promise<UserProfile> {
  try {
    const res = await api.get(`/profile`);

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
