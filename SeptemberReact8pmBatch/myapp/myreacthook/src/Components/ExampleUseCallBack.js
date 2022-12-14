import React, {memo, useCallback, useState} from "react";

export const ExampleUseCallBack = () => {
  alert("parent got called");
  const [count, setCount] = useState(0);
  const fn = useCallback(() => {}, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc Count{count}</button>
      <Child data={fn} />
    </div>
  );
};

const Child = memo(() => {
  alert("child got called");
  return <div>I'm Child Component</div>;
});
