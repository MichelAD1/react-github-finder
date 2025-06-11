import React from "react";

const RepoCard = ({ repo }) => {
  return (
    <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 w-full max-w-sm transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col gap-2">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg font-semibold hover:underline"
        >
          {repo.full_name}
        </a>
        <p className="text-sm text-gray-400 line-clamp-3">
          {repo.description || "No description available."}
        </p>

        <div className="flex justify-between text-sm text-gray-300 mt-2">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
          <span>🧑‍💻 {repo.language || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
