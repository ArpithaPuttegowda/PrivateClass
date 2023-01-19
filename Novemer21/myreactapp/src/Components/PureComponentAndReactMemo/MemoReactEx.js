import React, {Component, memo, PureComponent, useState} from "react";

const ExampleMemo = () => {
  const [count, setCount] = useState(0);
  alert("parent called");
  const handleIncCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleIncCount}>Inc count ..{count}</button>
      <Child />
    </div>
  );
};

export default ExampleMemo;

let Child = memo(() => {
  alert("child called");
  return <h1>Child</h1>;
});

// Child = memo(Child);
