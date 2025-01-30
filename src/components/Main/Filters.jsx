import { ArrowDown01, ArrowUp01 } from "lucide-react";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
const Filters = () => {
  const { allUsers, setAllUsers } = useContext(UserContext);
  const [sort, setSort] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <h3>Total Users: {allUsers.length} </h3>
      <button
        title="Sort by ID"
        className="flex items-center justify-center rounded-full p-3 hover:bg-gray-300"
        onClick={() => {
          setAllUsers([...allUsers].reverse());
          setSort(!sort);
        }}
      >
        {sort ? <ArrowDown01 /> : <ArrowUp01 />}
      </button>
    </div>
  );
};
export default Filters;
