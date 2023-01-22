import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const style = {
  container: `flex justify-center items-center mt-10`,
  pageNumberContainer: `border border-white w-8 flex justify-center mr-2`,
  heroIcon: `h-5 w-5 cursor-pointer`,
  disabled: `cursor-default opacity-30`,
};

const Pagination = ({ currentPage, setCurrentPage, lastPage }) => {
  return (
    <div className={style.container}>
      <ChevronLeftIcon
        className={`${style.heroIcon} ${
          currentPage === 1 && style.disabled
        } mr-2`}
        onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
      />
      {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
        <button
          className={style.pageNumberContainer}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <ChevronRightIcon
        className={`${style.heroIcon} ${currentPage === 9 && style.disabled}`}
        onClick={() => currentPage !== 9 && setCurrentPage(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
