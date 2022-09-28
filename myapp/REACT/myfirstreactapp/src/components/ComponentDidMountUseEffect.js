import React, {useEffect, useState} from "react";

export const ComponentDidMountUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sachin");
  //componentDidMount
  useEffect(() => {
    alert("componentDidMount");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    alert("componentDidUpdate for only count state change");
  }, [count]);

  useEffect(() => {
    alert("componentDidUpdate for all the state and prop change");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc{count}</button>
      <button onClick={() => setName("DHoni")}>Change Name...{name}</button>
    </div>
  );
};
