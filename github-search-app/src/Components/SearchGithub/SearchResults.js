import React from "react";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";
import { FaSearch } from "react-icons/fa";

const SearchResults = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-10 text-center text-white">
        <FaSearch className="text-4xl text-purple-500 mb-4" />
        <p className="text-lg font-medium text-gray-300">
          No results found. Try a different search.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-wrap gap-6 justify-center">
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
