import { useState } from "react";
import IconChild from "./IconChild";
import DropdownChild from "./DropdownChild";

import MyContext from "./context";

const ContextProviderPattern = () => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <div>
      <h1>Header Parent Component</h1>
      <hr />
      <MyContext.Provider value={{ hidden, toggleHidden }}>
        <IconChild />
      </MyContext.Provider>
      <hr />
      {!hidden && <DropdownChild />}
    </div>
  );
};

export default ContextProviderPattern;
