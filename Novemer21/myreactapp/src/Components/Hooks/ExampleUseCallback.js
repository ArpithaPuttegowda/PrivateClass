import React, {memo, useCallback, useState} from "react";

export const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);
  alert("parent called");
  const data = useCallback(() => {
    console.log("fn");
  }, []);

  return (
    <div>
      <Child myData={data} />
      <button onClick={() => setCount(count + 1)}>Inc Count {count}</button>
    </div>
  );
};

const Child = memo(() => {
  alert("child called");
  return <h1>I'm Child</h1>;
});
