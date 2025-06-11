import React, { useState, useEffect } from "react";
import SearchInput from "../Components/SearchGithub/SearchInput";
import SearchResults from "../Components/SearchGithub/SearchResults";
import Pagination from "../Components/Pagination";
import useSearchStore from "../Stores/SearchStores";
import Spinner from "../Components/Spinner";
import { GetGithubUsers } from "../api/GetGithubUsers";

const ITEMS_PER_PAGE = 10;

const SearchGithub = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const searchType = useSearchStore((state) => state.searchType);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, searchType]);

  const { data, isLoading } = GetGithubUsers(
    searchTerm,
    searchType === "users",
    currentPage,
    ITEMS_PER_PAGE
  );

  const totalResults = data?.total_count || 0;
  const totalPages = Math.min(Math.ceil(totalResults / ITEMS_PER_PAGE), 100);

  return (
    <div className="min-h-screen dark px-4 pb-20">
      <SearchInput />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SearchResults users={data?.items || []} />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => {
                if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
                }
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default SearchGithub;
