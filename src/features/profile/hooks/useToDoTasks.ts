import { useSuspenseQuery } from "@tanstack/react-query";
import { getToDoTasks } from "../services/getToDoTasks";

export const useToDoTasks = () =>
  useSuspenseQuery({
    queryKey: ["todo-tasks"],
    queryFn: getToDoTasks,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
