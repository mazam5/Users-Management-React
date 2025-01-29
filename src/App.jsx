import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import ModalDelete from "./components/ModalDelete";
import Pagination from "./components/Pagination";
import UsersList from "./components/UsersList";
import UserContext from "./context";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // user's form data
  const [formData, setFormData] = useState({});
  const [deleteModal, setDeleteModal] = useState({ status: false, id: null });
  const [editModal, setEditModal] = useState({ status: false, id: null });
  const [addModal, setAddModal] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(4);
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = allUsers.slice(firstUserIndex, lastUserIndex);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const setEdit = (id) => {
    const user = allUsers.find((user) => user.id === id);
    setFormData(user);
  };

  const url = "https://jsonplaceholder.typicode.com/users";

  //
  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setAllUsers(response.data);
        console.log(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async () => {
    try {
      const response = await axios.post(url, formData);
      if (response.status === 201) {
        setAllUsers([...allUsers, response.data]);
        setAddModal(false);
        setFormData({});
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const editUser = async (id) => {
    try {
      const response = await axios.put(`${url}/${id}`, formData);
      if (response.status === 200) {
        setAllUsers(
          allUsers.map((user) => (user.id === id ? response.data : user))
        );
        setEditModal({ status: false, id: null });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      if (response.status === 200) {
        setAllUsers(allUsers.filter((user) => user.id !== id));
        setDeleteModal({ status: false, id: null });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        addModal,
        setAddModal,
        allUsers,
        formData,
        setUsersPerPage,
        currentPage,
        currentUsers,
        setCurrentPage,
        deleteModal,
        setDeleteModal,
        editModal,
        setEditModal,
        setEdit,
        setFormData,
        deleteUser,
        addUser,
        editUser,
      }}
    >
      <div className="mx-auto p-4 md:w-4/5 w-full">
        <header className="flex justify-between items-center mb-4">
          <h2>User Management Dashboard</h2>
          <button
            onClick={() => setAddModal(true)}
            className="bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-700"
          >
            Add User
          </button>
        </header>
        {loading ? (
          <div className="flex justify-center items-center md:h-96 h-72">
            <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"></svg>
            <p>Loading...</p>
          </div>
        ) : allUsers.length === 0 ? (
          <div className="flex justify-center items-center md:h-96 h-72">
            <p>No users found</p>
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
