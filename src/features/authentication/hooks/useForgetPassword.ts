import { useMutation } from "@tanstack/react-query";
import { forgetPassword } from "../services/forgetPassword";

export const useForgetPassword = () =>
  useMutation({
    mutationFn: forgetPassword,
  });
