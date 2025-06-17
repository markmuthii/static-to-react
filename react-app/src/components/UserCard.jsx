import { Link } from "react-router";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.picture.medium} alt={user.name.first} />
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <p>{user.email}</p>
      <p>
        {user.location.city}, {user.location.country}
      </p>
      <Link to={`/user/${user.login.uuid}`}>View Details</Link>
    </div>
  );
}

export default UserCard;
