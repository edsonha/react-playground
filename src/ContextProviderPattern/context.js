import { createContext } from "react";

const MyContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});

export default MyContext;
