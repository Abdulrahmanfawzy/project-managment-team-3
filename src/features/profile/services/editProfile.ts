import { api } from "@/services/api";
import type { EditProfileFormData } from "../schemas/editProfile";
import axios from "axios";

export async function editProfile(data: EditProfileFormData) {
  try {
    const res = await api.put("/profile", data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      throw error.response?.data || "An error occurred";
    }
  }
}
