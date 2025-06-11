import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-purple-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        <FaChevronLeft />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg transition shadow-md ${
            currentPage === page
              ? "bg-purple-700 text-white font-bold shadow-purple-500"
              : "bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-purple-700 disabled:opacity-30 disabled:cursor-not-allowed transition"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
