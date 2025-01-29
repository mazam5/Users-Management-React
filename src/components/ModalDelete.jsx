import { useContext } from "react";
import UserContext from "../context";

const ModalDelete = () => {
  const { setDeleteModal, deleteUser, deleteModal } = useContext(UserContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center transition bg-black/85 duration-1000">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold">Delete User</h2>
        <p className="mt-2">Do you really want to delete this user?</p>
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition"
            onClick={() => setDeleteModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            onClick={() => deleteUser(deleteModal.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
