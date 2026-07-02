import { useSuspenseQuery } from "@tanstack/react-query";
import { getDoneTasks } from "../services/getDoneTasks";

export const useDoneTasks = () =>
  useSuspenseQuery({
    queryKey: ["done-tasks"],
    queryFn: getDoneTasks,
    staleTime: 1000 * 60 * 5,
  });
