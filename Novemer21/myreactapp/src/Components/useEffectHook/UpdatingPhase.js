import React, {useEffect, useState} from "react";

export const UpdatingPhase = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sachin");

  //componentDidMount
  useEffect(() => {
    alert("called");
  }, []);

  //   (updating) => componentDidUpdate;
  useEffect(() => {
    alert("called for all the state changes");
  });

  //updating =>componentDidUpdate
  useEffect(() => {
    alert("called for count change");
  }, [count]);

  //updating =>componentDidUpdate
  useEffect(() => {
    alert("called for name changes");
  }, [name]);

  const handleIncCount = () => {
    setCount(count + 1);
  };

  const handleName = () => {
    setName("dhoni");
  };
  return (
    <div>
      <button onClick={handleIncCount}>Inc Count..{count}</button>
      <button onClick={handleName}>Change Name..{name}</button>
    </div>
  );
};
