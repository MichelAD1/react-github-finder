import React from "react";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";
import { FaSearch } from "react-icons/fa";

const SearchResults = ({ users, searchTerm }) => {
  if (!searchTerm) {
    return null;
  }

  if (!users || users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 text-center text-black">
        <FaSearch className="text-4xl text-purple-500 mb-4" />
        <p className="text-lg font-medium text-black-300">
          No results found. Try a different search.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-6 px-4">
      {users.map((item) =>
        item.login ? (
          <UserCard key={item.id} user={item} />
        ) : (
          <RepoCard key={item.id} repo={item} />
        )
      )}
    </div>
  );
};

export default SearchResults;
