import React, { useState, memo } from "react";

export const NameUpate = () => {
  const [name, setName] = useState("Sachin");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    setName("Sachin");
  };
  return (
    <div>
      {alert("parent called")}
      <h1>{name}</h1>
      <button onClick={handleNameChange}>Name Change</button>
      <button onClick={() => setCount(count + 1)}>Inc Count...{count}</button>
      <Child />
    </div>
  );
};

// let Child = () => {
//   alert("Child called");
//   return <div>I'm Child</div>;
// };

// Child = memo(Child);

const Child = memo(() => {
  alert("Child called");
  return <div>I'm Child</div>;
});
