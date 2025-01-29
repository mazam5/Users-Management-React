import PropTypes from "prop-types";
import { useContext } from "react";
import UserContext from "../context";

const Pagination = ({ totalUsers, usersPerPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }

  const { setCurrentPage, currentPage } = useContext(UserContext);
  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const goFirstPage = () => {
    setCurrentPage(1);
  };
  const goNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const goLastPage = () => {
    setCurrentPage(pages.length);
  };

  return (
    <div className="flex justify-center gap-2 my-4">
      <button
        disabled={currentPage === 1}
        className="bg-blue-500 flex disabled:bg-gray-400 justify-center text-white p-3 rounded-md hover:bg-blue-700 w-10"
        onClick={goFirstPage}
      >
        <span className="material-symbols-outlined">first_page</span>
      </button>
      <button
        disabled={currentPage === 1}
        className="bg-blue-500 flex disabled:bg-gray-400 justify-center text-white p-3 rounded-md hover:bg-blue-700 w-10"
        onClick={goPrevPage}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      {pages.map((page) => {
        return (
          <button
            key={page}
            disabled={currentPage === page}
            onClick={currentPage !== page ? () => setCurrentPage(page) : null}
            className={`bg-blue-500 text-white disabled:bg-gray-400 p-2 rounded-md active:bg-blue-700 hover:bg-blue-700 w-10`}
          >
            {page}
          </button>
        );
      })}
      <button
        disabled={currentPage === pages.length}
        onClick={currentPage < pages.length ? goNextPage : null}
        className="bg-blue-500 flex justify-center disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-md hover:bg-blue-700 w-10"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
      <button
        disabled={currentPage === pages.length}
        onClick={currentPage < pages.length ? goLastPage : null}
        className={`
                bg-blue-500 flex justify-center disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-md hover:bg-blue-700 w-10
                `}
      >
        <span className="material-symbols-outlined">last_page</span>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalUsers: PropTypes.number,
  usersPerPage: PropTypes.number,
};
export default Pagination;
