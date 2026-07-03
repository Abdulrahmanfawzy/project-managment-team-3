import { useSuspenseQuery } from "@tanstack/react-query";
import { getProfile } from "../services/getProfile";

export const useGetProfile = () =>
  useSuspenseQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: false,
  });
