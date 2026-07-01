import axios from "axios";
import type { VerifyAccountFormData } from "../schemas/verifyAccount";
import { publicApi } from "@/services/publicAPI";

export async function verifyAccount(data: VerifyAccountFormData) {
  try {
    const res = await publicApi.post(`/verify-account`, data);

    console.log(res);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || "An error occurred";
    }
  }
}
