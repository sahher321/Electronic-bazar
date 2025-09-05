import React, { useState } from "react";

const Pagination = ({
  totalResults = 120,
  resultsPerPage = 9,
  pagesToShow = 4,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // ✅ Track current page

  const handlePageClick = (page) => {
    setCurrentPage(page); // ✅ Update current page
    console.log("Go to page:", page);
  };

  const handleEllipsisClick = () => {
    if (startPage + pagesToShow - 1 < totalPages) {
      setStartPage((prev) => prev + 1);
    }
  };

  const displayedPages = [];
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    displayedPages.push(i);
  }

  const showEllipsis = endPage < totalPages;

  return (
    <div className="flex justify-between  ">
      <p>Showing 9 of 120 result</p>
      <div className="flex gap-1">
        {displayedPages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`
            w-12 h-10 flex items-center justify-center rounded-md text-sm font-medium
            ${
              page === currentPage
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }
          `}
          >
            {page}
          </button>
        ))}

        {showEllipsis && (
          <button
            onClick={handleEllipsisClick}
            className="px-3 py-1 rounded text-sm  bg-orange-100 text-orange-700 hover:bg-orange-200"
          >
            ...
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
