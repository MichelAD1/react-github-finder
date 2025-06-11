import React from "react";
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";

const SearchResults = ({ users }) => {
  if (!users || users.length === 0) {
    return <p className="text-center mt-6 text-gray-400">No results found.</p>;
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
