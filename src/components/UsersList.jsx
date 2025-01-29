import { useContext } from "react";
import UserContext from "../context";
import UserCard from "./UserCard";

const UsersList = () => {
  const { allUsers } = useContext(UserContext);
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
      {allUsers.map((user, index) => {
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
