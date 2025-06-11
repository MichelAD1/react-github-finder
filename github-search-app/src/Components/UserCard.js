import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 flex items-center gap-5 w-full max-w-sm cursor-pointer transition-transform duration-300 hover:scale-105">
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className="w-16 h-16 rounded-full border-2 border-purple-600"
      />
      <div className="flex flex-col flex-grow">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg font-semibold hover:underline"
        >
          {user.login}
        </a>
        <span className="text-purple-400 text-sm">{user.type}</span>
      </div>
    </div>
  );
};

export default UserCard;
