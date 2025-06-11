import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUsers = async (searchTerm, page = 1, perPage = 10) => {
  const { data } = await axios.get(
    `https://api.github.com/search/users?q=${searchTerm}&page=${page}&per_page=${perPage}`
  );
  return data;
};

export const GetGithubUsers = (
  searchTerm,
  enabled = true,
  page = 1,
  perPage = 10
) => {
  return useQuery({
    queryKey: ["githubUsers", searchTerm, page],
    queryFn: () => fetchUsers(searchTerm, page, perPage),
    refetchOnWindowFocus: false,
    enabled: enabled && !!searchTerm,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
