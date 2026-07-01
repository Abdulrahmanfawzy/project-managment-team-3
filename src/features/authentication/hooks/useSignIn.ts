import { useMutation } from "@tanstack/react-query";
import { signIn } from "../services/signin";
import TokenService from "@/services/tokenServices";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      TokenService.setToken(data.token);
      navigate("/dashboard/profile/overview");
      //TODO redirect after login
    },
  });
};
