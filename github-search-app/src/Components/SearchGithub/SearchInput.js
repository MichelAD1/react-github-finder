import React, { useState } from "react";
import { FaSearch, FaUser, FaBook } from "react-icons/fa";
import useSearchStore from "../../Stores/SearchStores";
import githubLogo from "../../assets/github-text.png";
// import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const setSearchType = useSearchStore((state) => state.setSearchType);

  const handleSearch = (type) => {
    if (!inputValue.trim()) return;
    setSearchTerm(inputValue);
    setSearchType(type);
  };
  //   const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center px-4 pt-10 pb-6">
      <img
        src={githubLogo}
        alt="GitHub"
        className="w-52 mb-8 opacity-90 transition duration-300 transform hover:scale-105 hover:opacity-100 drop-shadow-lg"
      />

      <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 w-full max-w-3xl transition-all duration-1000 hover:shadow-purple-700/40">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition duration-300 hover:text-purple-400" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search GitHub users or repositories..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-white placeholder:text-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>

          <div className="flex gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleSearch("users")}
              className="flex-grow sm:flex-grow-0 min-w-[150px] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-500 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2">
                <FaUser />
                Find Users
              </div>
            </button>
            <button
              onClick={() => handleSearch("repositories")}
              className="flex-grow sm:flex-grow-0 min-w-[155px] text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-500 bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2">
                <FaBook />
                Find Repos
              </div>
            </button>
            {/* <button
              onClick={() => navigate("/page")}
              className="mt-6 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-500 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 transform hover:scale-105"
            >
              Go to /page
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
