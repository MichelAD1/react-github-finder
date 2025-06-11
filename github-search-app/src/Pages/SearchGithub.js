import React from "react";
import SearchInput from "../Components/SearchGithub/SearchInput";
import SearchResults from "../Components/SearchGithub/SearchResults";
import useSearchStore from "../Stores/SearchStores";
import Spinner from "../Components/Spinner";
import { GetGithubUsers } from "../api/GetGithubUsers";

const SearchGithub = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const searchType = useSearchStore((state) => state.searchType);

  const { data: results = [], isLoading } = GetGithubUsers(
    searchTerm,
    searchType === "users"
  );

  return (
    <div className="min-h-screen dark">
      <SearchInput />
      {isLoading ? <Spinner /> : <SearchResults users={results} />}
    </div>
  );
};

export default SearchGithub;
