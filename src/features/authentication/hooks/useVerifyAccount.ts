import { useMutation } from "@tanstack/react-query";
import { verifyAccount } from "../services/verifyAccount";

export const useVerifyAccount = () =>
  useMutation({
    mutationFn: verifyAccount,
  });
