import useSWR from "swr";

import fetcher from "../libs/fetcher";

// "/api/current" - we create inside api/current.ts
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
