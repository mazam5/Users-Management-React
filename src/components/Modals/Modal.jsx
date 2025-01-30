import { useContext } from "react";
import UserContext from "../../context/UserContext";
import GenericModal from "./GenericModal";
import TextInput from "./TextInput";
import useModal from "../../hooks/useModal";

const Modal = () => {
  const { formData, setFormData } = useContext(UserContext);
  const { handleClose, handleSubmit } = useModal();
  return (
    <GenericModal
      title="User Details"
      isOpen={true}
      onClose={handleClose}
      footerButtons={
        <>
          <button
            type="button"
            className="rounded-md bg-gray-300 px-4 py-2 text-black transition hover:bg-gray-400"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Save
          </button>
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          id="name"
          value={formData?.name || ""}
          placeholder="Enter Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextInput
          label="Username"
          id="username"
          value={formData?.username || ""}
          placeholder="Enter Username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <TextInput
          label="Email"
          id="email"
          value={formData?.email || ""}
          placeholder="Enter Email"
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextInput
          label="Company"
          id="company"
          value={formData?.company?.name || ""}
          placeholder="Enter Company Name"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              company: { ...prev.company, name: e.target.value },
            }))
          }
        />
        <TextInput
          label="Company's Department"
          id="company-department"
          value={formData?.company?.bs || ""}
          placeholder="Enter Company's Department"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              company: { ...prev.company, bs: e.target.value },
            }))
          }
        />
      </form>
    </GenericModal>
  );
};

export default Modal;
