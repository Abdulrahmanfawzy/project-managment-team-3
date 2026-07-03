import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/signup";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signup,
    onSuccess: () =>
      navigate("/signin", {
        replace: true,
        state: { message: "Account created successfully. please sign in" },
      }),
  });
};
