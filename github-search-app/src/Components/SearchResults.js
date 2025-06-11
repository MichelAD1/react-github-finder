import React from "react";
import UserCard from "./UserCard";

const SearchResults = ({ users }) => {
  if (!users) {
    return <p className="text-center mt-6 text-gray-400">No results found.</p>;
  }

  return (
    <div className="mt-6 flex flex-wrap gap-6 justify-center">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default SearchResults;
