import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecentActivities } from "../services/getRecentActivities";

export const useRecentActivities = () =>
  useSuspenseQuery({
    queryKey: ["recent-activities"],
    queryFn: getRecentActivities,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
