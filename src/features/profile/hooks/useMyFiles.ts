import { useSuspenseQuery } from "@tanstack/react-query";

import { getMyFiles } from "../services/getMyFiles";

export const useMyFiles = () =>
  useSuspenseQuery({
    queryKey: ["files", "profile"],
    queryFn: getMyFiles,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
