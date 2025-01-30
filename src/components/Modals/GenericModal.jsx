import PropTypes from "prop-types";
import { X } from "lucide-react";

const GenericModal = ({ title, isOpen, onClose, children, footerButtons }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/85">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            className="rounded-md p-2 text-black transition hover:bg-red-500 hover:text-white"
            type="button"
            onClick={onClose}
          >
            <X />
          </button>
        </div>
        <div className="mt-4">{children}</div>
        <div className="mt-4 flex justify-end gap-4">{footerButtons}</div>
      </div>
    </div>
  );
};

GenericModal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  footerButtons: PropTypes.node.isRequired,
};

export default GenericModal;
