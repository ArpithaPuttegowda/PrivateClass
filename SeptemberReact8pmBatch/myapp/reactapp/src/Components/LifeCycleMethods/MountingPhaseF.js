import React, {useEffect, useState} from "react";

export const MountingPhaseF = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  //componentDidMount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });
  const incCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      <button onClick={incCount}>Inc Count{count}</button>
    </div>
  );
};
