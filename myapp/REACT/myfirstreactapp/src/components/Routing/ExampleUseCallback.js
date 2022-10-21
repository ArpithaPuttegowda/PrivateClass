import React, {memo, useCallback} from "react";
import {useState} from "react";

export const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);
  alert("parent is calling");
  const fn = useCallback(() => {}, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc Count {count}</button>
      <Child name={fn} />
    </div>
  );
};

const Child = memo(() => {
  alert("child is calling");
  return <div>I'm Chid</div>;
});
