import { useState, useEffect } from "react";

const ReducerHook = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${searchQuery}`
      );
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <p>Enter a number</p>
      <input
        type="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
};

export default ReducerHook;
