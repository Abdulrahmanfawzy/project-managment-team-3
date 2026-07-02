import { useMutation } from "@tanstack/react-query";
import { editProfile } from "../services/editProfile";

export const useEditProfile = () => {
  return useMutation({
    mutationFn: editProfile,
  });
};
