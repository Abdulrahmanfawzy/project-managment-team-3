import { useSuspenseQuery } from "@tanstack/react-query";
import { getProfile } from "../services/getProfile";

export const useGetProfile = () =>
  useSuspenseQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    refetchOnWindowFocus: true,
    retry: false,
  });
