import { useState } from "react";

const WithExtra = (Component) => {
  const [count, setCount] = useState(0);

  const WrappedComponent = () => {
    return (
      <>
        <h2>Hello from WithExtra HOC</h2>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>
          Click to increase Count
        </button>
        <Component count={count} word="This is from withExtra" />
        <h2>Bye from WithExtra HOC</h2>
      </>
    );
  };
  return WrappedComponent;
};

export default WithExtra;
