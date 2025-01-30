import axios from "axios";
import { useEffect, useState } from "react";

const useUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_USERS_API_URL;

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(API);
      if (response.status === 200) {
        setAllUsers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const addUserApi = async (formData, setAddModal, setFormData) => {
    try {
      const response = await axios.post(API, formData);
      if (response.status === 201) {
        setAllUsers((prevUsers) => [...prevUsers, response.data]);
        setAddModal(false);
        setFormData({});
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editUserApi = async (id, formData) => {
    try {
      const response = await axios.put(`${API}/${id}`, formData);
      if (response.status === 200) {
        setAllUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === id ? response.data : user)),
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUserApi = async (id) => {
    try {
      const response = await axios.delete(`${API}/${id}`);
      if (response.status === 200) {
        setAllUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return {
    allUsers,
    setAllUsers,
    loading,
    fetchAllUsers,
    addUserApi,
    editUserApi,
    deleteUserApi,
  };
};

export default useUsers;
