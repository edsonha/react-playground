import { useEffect, useState } from "react";
import Child from "./Child";
import CustomizedContext from "./Context";

const ContextContainer = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/1`
      );
      const data = await response.json();
      setUser(data);
    }
    fetchData();
  }, []);

  // const userData = (
  //   <div>
  //     <h1>Profile</h1>
  //     name: {user.name}
  //     <br />
  //     username: {user.username}
  //     <br />
  //     email: {user.email}
  //   </div>
  // );

  // Before Context
  // return <Child userData={userData} />;

  return (
    <CustomizedContext.Provider value={user}>
      <Child />
    </CustomizedContext.Provider>
  );
};

export default ContextContainer;
