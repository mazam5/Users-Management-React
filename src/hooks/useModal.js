import { useContext } from "react";
import UserContext from "../context/UserContext";

const useModal = () => {
  const {
    addModal,
    setAddModal,
    allUsers,
    setFormData,
    formData,
    setEditModal,
    addUserApi,
    editUserApi,
  } = useContext(UserContext);
  const handleClose = () => {
    setFormData({});
    addModal ? setAddModal(false) : setEditModal({ status: false, id: null });
  };
  const setEdit = (id) => {
    const user = allUsers.find((user) => user.id === id);
    setFormData(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addModal) {
      setAddModal(false);
      addUserApi(formData);
    } else {
      editUserApi(formData.id, formData);
      setEditModal({ status: false, id: null });
    }
    setFormData({});
  };
  return { handleClose, handleSubmit, setEdit };
};

export default useModal;
