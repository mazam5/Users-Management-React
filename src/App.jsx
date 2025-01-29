import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "./context";
import UsersList from "./components/UsersList";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const url = "https://jsonplaceholder.typicode.com/users";
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setAllUsers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ allUsers }}>
      <div className="mx-auto p-4 md:w-4/5 w-full border-l-2 border-r-2 border-gray-300">
        <header>
          <h2>User Management Dashboard</h2>
        </header>
        {loading ? (
          <div className="flex justify-center items-center md:h-96 h-72">
            <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"></svg>
            <p>Loading...</p>
          </div>
        ) : (
          <UsersList />
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
