import {
  AtSign,
  Boxes,
  Building,
  Send,
  SquareUser,
  UserPen,
  UserX,
} from "lucide-react";
import PropTypes from "prop-types";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import useModal from "../../hooks/useModal";
const UserCard = (props) => {
  const { setEditModal, setDeleteModal } = useContext(UserContext);
  const { setEdit } = useModal();
  return (
    <div className="m-1 rounded-2xl bg-white p-3 hover:border-gray-400 hover:bg-gray-200">
      <div className="flex items-center justify-between rounded-xl">
        <div className="flex items-center">
          <SquareUser size="4rem" className="md:mx-4" />
          <div>
            <h2 className="text-xl font-bold md:text-2xl">{props.data.name}</h2>
            <p className="flex items-center text-xs italic md:text-lg">
              <AtSign size="2rem" className="mr-2" />
              {props.data.username}
            </p>
            <a
              href={`mailto:${props.data.email}`}
              className="flex items-center hover:text-blue-500 hover:underline"
            >
              <Send size="2rem" className="mr-2" />
              <p className="text-xs italic md:text-lg">{props.data.email}</p>
            </a>
          </div>
          <h2 className="text-xl font-bold md:text-3xl">#{props.data.id}</h2>
        </div>
      </div>
      <div className="my-2 flex items-center justify-between"></div>
      <div className="mb-4 flex items-center rounded-xl bg-gray-400 p-1">
        <Building size="2rem" className="mx-2" />
        <p className="text-lg text-wrap md:text-xl">
          {props.data.company.name}
        </p>
      </div>
      <div className="mb-4 flex items-center rounded-xl bg-gray-400 p-1">
        <Boxes size="2rem" className="mx-2" />
        <p className="text-lg text-wrap md:text-xl">{props.data.company.bs}</p>
      </div>
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={() => {
            setEditModal({ status: true, id: props.data.id });
            setEdit(props.data.id);
            console.log(props.data.id);
          }}
          className="flex items-center justify-between rounded-md bg-indigo-500 p-2 text-white hover:bg-indigo-700"
        >
          <UserPen size="1.5rem" className="mr-2" />
          Edit
        </button>
        <button
          onClick={() => setDeleteModal({ status: true, id: props.data.id })}
          className="flex items-center justify-between rounded-md bg-orange-500 p-2 text-white hover:bg-orange-700"
        >
          <UserX size="1.5rem" className="mr-2" />
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
