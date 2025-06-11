import React, { useState, useEffect } from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [pageGroup, setPageGroup] = useState(0);

  const pagesPerGroup = 10;

  const startPage = pageGroup * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handleNextGroup = () => {
    if ((pageGroup + 1) * pagesPerGroup < totalPages) {
      setPageGroup(pageGroup + 1);
      onPageChange((pageGroup + 1) * pagesPerGroup + 1);
    }
  };

  const handlePrevGroup = () => {
    if (pageGroup > 0) {
      setPageGroup(pageGroup - 1);
      onPageChange((pageGroup - 1) * pagesPerGroup + 1);
    }
  };

  useEffect(() => {
    setPageGroup(Math.floor((currentPage - 1) / pagesPerGroup));
  }, [currentPage, totalPages]);

  return (
    <div className="flex gap-2 justify-center mt-6">
      {pageGroup > 0 && (
        <button
          onClick={handlePrevGroup}
          className="px-3 py-1 rounded-md bg-black-200 hover:bg-black-300"
        >
          &hellip;
        </button>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md ${
            page === currentPage
              ? "bg-purple-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <button
          onClick={handleNextGroup}
          className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          &hellip;
        </button>
      )}
    </div>
  );
};

export default Pagination;
