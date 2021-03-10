import { useContext } from "react";
import { MyContext } from "./context";

const IconChild = () => {
  const { toggleHidden } = useContext(MyContext);

  return (
    <div>
      <h1>Icon Child Component</h1>
      <p>To display or not to display the dropdown sibling component</p>

      <button onClick={toggleHidden}>
        Click here to Toggle Dropdown Component
      </button>
    </div>
  );
};

export default IconChild;
