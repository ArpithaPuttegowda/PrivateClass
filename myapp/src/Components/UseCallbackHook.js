import React, {memo, useCallback, useState} from "react";

export const UseCallbackHook = () => {
  alert("Parent called");
  const [count, setCount] = useState(0);
  const getData = useCallback((d) => {
    console.log(d);
  }, []);
  return (
    <div>
      <Child fn={getData} />
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
      <h1>{count}</h1>
    </div>
  );
};

const Child = memo(({fn}) => {
  alert("Child called");
  const data = "Sachin";
  return (
    <h1>
      <button onClick={() => fn(data)}>Click me</button>
    </h1>
  );
});
