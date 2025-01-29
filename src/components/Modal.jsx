import { useContext, useEffect } from "react";
import UserContext from "../context";

const Modal = () => {
  const { formData, setEditModal, setFormData, addUser, editUser, addModal } =
    useContext(UserContext);
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div
      className="modal fixed flex justify-center items-center inset-0 bg-black/85"
      tabIndex={-1}
    >
      <form
        className="bg-white p-6 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">User Details</h2>
          <button
            className=" text-black px-4 py-2 rounded-md hover:text-red-600 transition"
            type="button"
            onClick={() => setEditModal({ status: false, id: null })}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* Name Field */}
        <div className="mt-4">
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData?.name || ""}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* Username Field */}
        <div className="mt-4">
          <label htmlFor="username" className="block">
            Username
          </label>
          <input
            required
            type="text"
            value={formData?.username || ""}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            id="username"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {/* Email Field */}
        <div className="mt-4">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            required
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            id="email"
            value={formData?.email || ""}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Company Name Field */}
        <div className="mt-4">
          <label htmlFor="company" className="block">
            Company
          </label>
          <input
            required
            type="text"
            id="company"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                company: {
                  ...prev.company,
                  name: e.target.value,
                },
              }))
            }
            value={formData?.company?.name || ""}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Company Department Field */}
        <div className="mt-4">
          <label htmlFor="company-department" className="block">
            Company Department
          </label>
          <input
            required
            type="text"
            id="company-department"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                company: {
                  ...prev.company,
                  bs: e.target.value,
                },
              }))
            }
            value={formData?.company?.bs || ""}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-end gap-4">
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition"
            onClick={() => setEditModal({ status: false, id: null })}
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              addModal ? addUser() : editUser(formData.id);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
