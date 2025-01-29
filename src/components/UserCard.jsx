import PropTypes from "prop-types";
import { useContext } from "react";
import UserContext from "../context";
const UserCard = (props) => {
  const { setDeleteModal, setEditModal, setEdit } = useContext(UserContext);
  return (
    <div className=" bg-white p-3 delay-1000 m-2 hover:shadow-gray-300 hover:shadow-lg hover:bg-gray-300 rounded-2xl">
      <div className="flex  rounded-xl items-center justify-between">
        <div className="flex items-center">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "5rem" }}
          >
            account_circle
          </span>
          <div>
            <h2 className="text-2xl font-bold">{props.data.name}</h2>
            <p className="text-lg italic">@{props.data.username}</p>
          </div>
        </div>
        <h2 className="md:text-4xl text-2xl font-bold">#{props.data.id}</h2>
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="hover:text-blue-500">
          <a href={`tel:${props.data.phone}`} className="flex items-center">
            <span
              className="material-symbols-outlined mr-2"
              style={{ fontSize: "2rem" }}
            >
              phone
            </span>
            <p className="italic text-lg">{props.data.phone}</p>
          </a>
        </div>
        <div className="hover:text-blue-500">
          <a href={`mailto:${props.data.email}`} className="flex items-center">
            <span
              className="material-symbols-outlined mr-2"
              style={{ fontSize: "2rem" }}
            >
              contact_mail
            </span>
            <p className="italic text-lg">{props.data.email}</p>
          </a>
        </div>
      </div>
      <div className="flex mb-4 p-1 rounded-xl items-center bg-gray-300">
        <span
          className="material-symbols-outlined mr-2"
          style={{ fontSize: "2rem" }}
        >
          corporate_fare
        </span>
        <p className="text-wrap">{props.data.company.name}</p>
      </div>
      <div className="flex mb-4 p-1 rounded-xl items-center bg-gray-300">
        <span
          className="material-symbols-outlined mr-2"
          style={{ fontSize: "2rem" }}
        >
          groups
        </span>
        <p className="text-wrap">{props.data.company.bs}</p>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setEditModal({ status: true, id: props.data.id });
            setEdit(props.data.id);
            console.log(props.data.id);
          }}
          className="bg-indigo-500 flex justify-between items-center text-white p-2 rounded-md hover:bg-indigo-700"
        >
          <span className="material-symbols-outlined mr-2">edit</span>
          Edit
        </button>
        <button
          onClick={() => setDeleteModal({ status: true, id: props.data.id })}
          className="bg-orange-500 flex justify-between items-center text-white p-2 rounded-md hover:bg-orange-700"
        >
          <span className="material-symbols-outlined">person_remove</span>
          Delete
        </button>
      </div>
    </div>
  );
};
UserCard.propTypes = {
  data: PropTypes.object,
};
export default UserCard;
