import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/getProfile";

export const useGetProfile = () =>
  useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    refetchOnWindowFocus: true,
  });
