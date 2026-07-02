import { useSuspenseQuery } from "@tanstack/react-query";

import { getMyFiles } from "../services/getMyFiles";

export const useMyFiles = () =>
  useSuspenseQuery({
    queryKey: ["files", "profile"],
    queryFn: getMyFiles,
    refetchOnWindowFocus: true,
    retry: false,
  });
