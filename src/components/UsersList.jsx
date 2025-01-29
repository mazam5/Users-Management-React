import { useContext } from "react";
import UserContext from "../context";
import UserCard from "./UserCard";

const UsersList = () => {
  const { currentUsers } = useContext(UserContext);
  return (
    <section
      className="grid md:grid-cols-2 grid-cols-1 rounded-xl md:gap-3 gap-1"
      style={{ height: "80vh", overflowY: "auto" }}
    >
      {currentUsers.map((user, index) => {
        return (
          <div key={index}>
            <UserCard data={user} />
          </div>
        );
      })}
    </section>
  );
};
export default UsersList;
