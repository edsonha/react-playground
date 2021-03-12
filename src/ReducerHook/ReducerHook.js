import { useEffect, useReducer } from "react";

const initialState = {
  user: null,
  searchQuery: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "setSearchQuery":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const setUser = (user) => ({ type: "setUser", payload: user });
const setSearchQuery = (queryString) => ({
  type: "setSearchQuery",
  payload: queryString,
});

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, searchQuery } = state;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${searchQuery}`
      );
      const data = await response.json();
      dispatch(setUser(data));
    };
    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <p>Enter a number between 1 - 10 to reveal user</p>
      <input
        type="search"
        value={searchQuery}
        onChange={(event) => dispatch(setSearchQuery(event.target.value))}
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
