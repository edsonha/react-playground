import { useState, createContext } from "react";

export const MyContext = createContext({
  hidden: true,
  toggleHidden: () => {},
});

const ContextProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <MyContext.Provider value={{ hidden, toggleHidden }}>
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;
