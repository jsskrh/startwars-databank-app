import React from "react";

const Pagination = ({ currentPage, setCurrentPage, lastPage }) => {
  return (
    <div>
      {currentPage > 2 && <button onClick={() => setCurrentPage(1)}>1</button>}
      {currentPage > 1 && (
        <button
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      )}
      {currentPage}
      {currentPage < lastPage && (
        <button
          onClick={() =>
            currentPage < lastPage && setCurrentPage(currentPage + 1)
          }
        >
          {currentPage + 1}
        </button>
      )}
      {currentPage < lastPage - 1 && (
        <button onClick={() => setCurrentPage(lastPage)}>{lastPage}</button>
      )}
    </div>
  );
};

export default Pagination;
