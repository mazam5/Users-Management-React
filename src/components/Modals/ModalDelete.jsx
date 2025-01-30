import { useContext } from "react";
import UserContext from "../../context/UserContext";
import GenericModal from "./GenericModal";

const ModalDelete = () => {
  const { setDeleteModal, deleteModal, deleteUserApi } =
    useContext(UserContext);
  return (
    <GenericModal
      title="Delete User"
      isOpen={true}
      onClose={() => setDeleteModal(false)}
      footerButtons={
        <>
          <button
            className="rounded-md bg-gray-300 px-4 py-2 text-black transition hover:bg-gray-400"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
            onClick={() => {
              deleteUserApi(deleteModal.id);
              setDeleteModal(false);
            }}
          >
            Delete
          </button>
        </>
      }
    >
      <p className="mt-2">Do you really want to delete this user?</p>
    </GenericModal>
  );
};

export default ModalDelete;
