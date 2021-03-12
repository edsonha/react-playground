import { useState } from "react";
import HookMouse from "./HookMouse";

const CWUContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
};

export default CWUContainer;
