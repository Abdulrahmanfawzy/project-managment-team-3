import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/signup";

export const useSignUp = () => {
  return useMutation({
    mutationFn: signup,
  });
};
