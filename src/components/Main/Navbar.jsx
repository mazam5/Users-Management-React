import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { UserPlus } from "lucide-react";

const Navbar = () => {
  const { setAddModal } = useContext(UserContext);
  return (
    <header className="flex items-center justify-between bg-indigo-500 p-1 text-black">
      <h3 className="text-lg font-semibold text-white md:text-2xl">
        User Management Dashboard
      </h3>
      <div className="flex">
        <button
          onClick={() => setAddModal(true)}
          className="flex items-center rounded-md bg-indigo-600 p-1 text-sm text-white hover:bg-indigo-800 md:p-2 md:text-xl"
        >
          <UserPlus size="1.5rem" className="mr-2" />
          Add User
        </button>
      </div>
    </header>
  );
};
export default Navbar;
