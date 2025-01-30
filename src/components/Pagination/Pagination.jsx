import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PropTypes from "prop-types";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import usePagination from "../../hooks/usePagination";
import PaginationButton from "./PaginationButton";

const Pagination = ({ totalUsers, usersPerPage }) => {
  const { currentPage } = useContext(UserContext);
  const { pages, goNextPage, goPrevPage, goToPage } = usePagination(
    totalUsers,
    usersPerPage,
  );

  return (
    <div className="my-2 flex justify-center gap-2">
      <PaginationButton
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
      >
        <ChevronFirst />
      </PaginationButton>
      <PaginationButton onClick={goPrevPage} disabled={currentPage === 1}>
        <ChevronLeft />
      </PaginationButton>

      <div className="mx-8 flex gap-3">
        {pages.map((page) => (
          <PaginationButton
            key={page}
            onClick={() => goToPage(page)}
            disabled={currentPage === page}
          >
            {page}
          </PaginationButton>
        ))}
      </div>

      <PaginationButton
        onClick={goNextPage}
        disabled={currentPage === pages.length}
      >
        <ChevronRight />
      </PaginationButton>

      <PaginationButton
        onClick={() => goToPage(pages.length)}
        disabled={currentPage === pages.length}
      >
        <ChevronLast />
      </PaginationButton>
    </div>
  );
};

Pagination.propTypes = {
  totalUsers: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
};

export default Pagination;
