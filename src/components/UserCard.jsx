import PropTypes from "prop-types";
const UserCard = (props) => {
  return (
    <div className=" bg-gray-200 p-4 m-4 hover:shadow-lg hover:bg-gray-300 rounded-lg">
      <h1 className="text-3xl font-bold text-right">#{props.data.id}</h1>
      <div className="flex items-center my-2">
        <span className="material-symbols-outlined">badge</span>
        <h2 className="text-xl italic font-semibold">{props.data.name}</h2>
      </div>
      <div className="hover:text-blue-500 my-2">
        <a href={`mailto:${props.data.email}`} className="flex items-center">
          <span className="material-symbols-outlined">contact_mail</span>
          <p className="italic text-lg">{props.data.email}</p>
        </a>
      </div>
      <div className="flex mb-4">
        <span className="material-symbols-outlined">group</span>
        <p className="text-wrap">{props.data.company.bs}</p>
      </div>
      <div className="flex justify-between items-center">
        <button className="bg-blue-500 flex justify-between items-center text-white p-2 rounded-md hover:bg-blue-700">
          <span className="material-symbols-outlined">edit</span>
          Edit
        </button>
        <button className="bg-red-500 flex justify-between items-center text-white p-2 rounded-md hover:bg-red-700">
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
