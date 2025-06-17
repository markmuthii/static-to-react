import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <main id="user-container">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </main>
  );
}

export default UserList;
