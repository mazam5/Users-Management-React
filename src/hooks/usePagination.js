import { useContext, useMemo } from "react";
import UserContext from "../context/UserContext";

const usePagination = (totalItems, itemsPerPage) => {
  const { currentPage, setCurrentPage } = useContext(UserContext);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = useMemo(
    () => Array.from({ length: totalPages }, (_, i) => i + 1),
    [totalPages],
  );

  const goToPage = (page) => setCurrentPage(page);
  const goPrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goNextPage = () =>
    currentPage < pages.length && setCurrentPage(currentPage + 1);

  return { totalPages, pages, goToPage, goPrevPage, goNextPage };
};

export default usePagination;
