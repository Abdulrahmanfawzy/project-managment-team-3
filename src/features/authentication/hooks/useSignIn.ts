import { useMutation } from "@tanstack/react-query";
import { signIn } from "../services/signin";

export const useSignIn = () =>
  useMutation({
    mutationFn: signIn,
  });
