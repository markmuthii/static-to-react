import { useState } from "react";
import UserList from "../components/UserList";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch("https://randomuser.me/api/?results=6");
    const data = await res.json();
    setUsers(data.results);
    localStorage.setItem("users", JSON.stringify(data.results)); // for detail page
    setLoading(false);
  };

  return (
    <div className="container">
      <header>
        <h1>Random User Directory</h1>
        <button onClick={fetchUsers}>Load Users</button>
      </header>

      {loading ? <p>Loading...</p> : <UserList users={users} />}
    </div>
  );
}

export default Home;
