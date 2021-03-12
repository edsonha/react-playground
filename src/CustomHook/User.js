import useFetch from "./useFetch";

const User = ({ userId }) => {
  const user = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  return (
    <div>
      <h1>USER</h1>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default User;
