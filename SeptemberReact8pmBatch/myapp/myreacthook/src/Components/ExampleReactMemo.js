import React, {memo, useState} from "react";

export const ExampleReactMemo = () => {
  alert("parent got called");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc Count{count}</button>
      <Child />
    </div>
  );
};

let Child = () => {
  alert("child got called");
  return <div>Child...</div>;
};
Child = memo(Child);

export default ExampleReactMemo;
