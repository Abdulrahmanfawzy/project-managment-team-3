import { QueryClient, useMutation } from "@tanstack/react-query";
import { editProfile } from "../services/editProfile";

export const useEditProfile = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      alert("Profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    onError: (error) => {
      alert(`Error updating profile: ${error.message}`);
    },
  });
};
