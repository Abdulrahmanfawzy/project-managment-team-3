import { useMutation } from "@tanstack/react-query";
import { signIn } from "../services/signin";
import { setToken } from "../services/token";

export const useSignIn = () =>
  useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      setToken(data.token);
      //TODO redirect after login
    },
  });
