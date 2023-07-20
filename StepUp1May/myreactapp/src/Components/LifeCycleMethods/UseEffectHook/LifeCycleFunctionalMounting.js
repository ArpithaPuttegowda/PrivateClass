import React, { useEffect, useState } from "react";

export const LifeCycleFunctionalMounting = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const handleCount = () => {
    setCount(count + 1);
  };
  //componentDidMount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <button onClick={handleCount}>Count..{count}</button>
      {data?.map((obj) => {
        return <h1>{obj.email}</h1>;
      })}
    </div>
  );
};
