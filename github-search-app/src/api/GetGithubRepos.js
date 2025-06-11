import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchRepos = async (searchTerm, page = 1, perPage = 10) => {
  const { data } = await axios.get(
    `https://api.github.com/search/repositories?q=${searchTerm}&page=${page}&per_page=${perPage}`
  );
  return data;
};

export const GetGithubRepos = (
  searchTerm,
  enabled = true,
  page = 1,
  perPage = 10
) => {
  return useQuery({
    queryKey: ["githubRepos", searchTerm, page],
    queryFn: () => fetchRepos(searchTerm, page, perPage),
    refetchOnWindowFocus: false,
    enabled: enabled && !!searchTerm,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
