import PropTypes from "prop-types";

const PaginationButton = ({ onClick, disabled, children }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className="flex w-6 items-center justify-center rounded-md bg-indigo-500 p-2 text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400 md:w-10"
  >
    {children}
  </button>
);

PaginationButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default PaginationButton;
