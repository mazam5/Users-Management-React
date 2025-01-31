import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Pagination from "../Pagination/Pagination";
import Filters from "./Filters";
import UserCard from "./UserCard";

const UsersList = () => {
  const { allUsers, currentUsers, usersPerPage } = useContext(UserContext);
  return (
    <div className="m-4 mx-auto w-full md:m-0 md:w-4/5">
      {allUsers.length === 0 ? (
        <div className="flex h-72 items-center justify-center md:h-96">
          <p>No users found</p>
        </div>
      ) : (
        <div>
          <Filters />
          <section
            className="grid grid-cols-1 gap-2 bg-red-400 md:grid-cols-2 md:gap-4"
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
          <Pagination
            totalUsers={allUsers.length}
            usersPerPage={usersPerPage}
          />
        </div>
      )}
    </div>
  );
};
export default UsersList;
