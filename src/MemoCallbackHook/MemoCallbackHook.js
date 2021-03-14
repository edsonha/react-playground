import React, { useState, useCallback, useMemo } from "react";

const functions = new Set();

const MemoCallbackHook = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const incrementCount2 = useCallback(() => setCount2(count2 + 1), [count2]);
  const logName = useCallback(() => console.log("name"), []);

  functions.add(logName);
  functions.add(incrementCount1);
  functions.add(incrementCount2);

  const doSomethingComplicated = useMemo(() => {
    console.log("I am computing something complex");
    return ((count1 * 1000) % 12.4) * 51000 - 4000;
  }, [count1]);

  functions.add(doSomethingComplicated);

  console.log(functions);

  return (
    <div>
      Count1: {count1}
      <br />
      <button onClick={incrementCount1}>Increase Count1</button>
      <br />
      Count2: {count2}
      <br />
      <button onClick={incrementCount2}>Increase Count2</button>
      <br />
      <button onClick={logName}>Log Name</button>
      <br />
      Complex Value: {doSomethingComplicated}
    </div>
  );
};

export default MemoCallbackHook;
