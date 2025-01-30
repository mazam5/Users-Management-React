import { useContext } from "react";
import UserContext from "../../context/UserContext";
import UserCard from "./UserCard";
import Filters from "./Filters";

const UsersList = () => {
  const { allUsers, currentUsers } = useContext(UserContext);
  return (
    <div className="mx-auto w-full md:w-4/5">
      {allUsers.length === 0 ? (
        <div className="flex h-72 items-center justify-center md:h-96">
          <p>No users found</p>
        </div>
      ) : (
        <div>
          <Filters />
          <section
            className="grid grid-cols-1 md:grid-cols-2"
            style={{
              height: "80vh",
              overflowY: "auto",
            }}
          >
            {currentUsers.map((user, index) => {
              return (
                <div key={index}>
                  <UserCard data={user} />
                </div>
              );
            })}
          </section>
        </div>
      )}
    </div>
  );
};
export default UsersList;
