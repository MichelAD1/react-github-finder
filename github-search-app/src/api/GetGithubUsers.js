import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async (searchTerm) => {
  const { data } = await axios.get(
    `https://api.github.com/search/users?q=${searchTerm}`
  );
  return data.items;
};

export const GetGithubUsers = (searchTerm, enabled = true) => {
  return useQuery({
    queryKey: ["githubUsers", searchTerm],
    queryFn: () => fetchUsers(searchTerm),
    refetchOnWindowFocus: false,
    enabled: enabled && !!searchTerm,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
