import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../services/resetPassword";

export const useResetPassword = () =>
  useMutation({
    mutationFn: resetPassword,
  });
