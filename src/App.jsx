import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import Navbar from "./components/Main/Navbar";
import UsersList from "./components/Main/UsersList";
import Modal from "./components/Modals/Modal";
import ModalDelete from "./components/Modals/ModalDelete";
import Pagination from "./components/Pagination/Pagination";
import UserContext from "./context/UserContext";
import useUsers from "./hooks/useUsers";

function App() {
  const {
    allUsers,
    setAllUsers,
    loading,
    addUserApi,
    editUserApi,
    deleteUserApi,
  } = useUsers();

  const [formData, setFormData] = useState({});
  const [deleteModal, setDeleteModal] = useState({ status: false, id: null });
  const [editModal, setEditModal] = useState({ status: false, id: null });
  const [addModal, setAddModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(4);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = allUsers.slice(firstUserIndex, lastUserIndex);

  return (
    <UserContext.Provider
      value={{
        addModal,
        setAddModal,
        allUsers,
        setAllUsers,
        formData,
        setUsersPerPage,
        currentPage,
        currentUsers,
        setCurrentPage,
        deleteModal,
        setDeleteModal,
        editModal,
        setEditModal,
        setFormData,
        loading,
        addUserApi,
        editUserApi,
        deleteUserApi,
      }}
    >
      <Navbar />
      <div>
        {loading ? (
          <div className="flex h-72 items-center justify-center md:h-96">
            <LoaderCircle />
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <UsersList />
            <Pagination
              totalUsers={allUsers.length}
              usersPerPage={usersPerPage}
            />
          </>
        )}
      </div>
      {deleteModal.status && <ModalDelete />}
      {(editModal.status || addModal) && <Modal />}
    </UserContext.Provider>
  );
}

export default App;
