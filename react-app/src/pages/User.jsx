import { useParams, Link } from "react-router";

function User() {
  const { uuid } = useParams();
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find((u) => u.login.uuid === uuid);

  if (!user) return <p>User not found.</p>;

  return (
    <div className="container">
      <Link to="/">← Back</Link>
      <div className="user-card">
        <img src={user.picture.large} alt={user.name.first} />
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Location:</strong> {user.location.city},{" "}
          {user.location.country}
        </p>
        <p>
          <strong>Username:</strong> {user.login.username}
        </p>
        <p>
          <strong>DOB:</strong> {new Date(user.dob.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default User;
