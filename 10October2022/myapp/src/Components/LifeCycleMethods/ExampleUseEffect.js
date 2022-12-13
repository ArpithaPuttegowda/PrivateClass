import React, {useEffect, useState} from "react";

export const ExampleUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sachin");
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleNameChange = () => {
    setName("Dhoni");
  };
  useEffect(() => {
    alert("useEffect as componentDidMount");
  }, []);

  useEffect(() => {
    alert("useEffect as componentDidUpdate for name change");
  }, [name]);

  useEffect(() => {
    alert("useEffect as componentDidUpdate for count change");
  }, [count]);

  useEffect(() => {
    alert("this will call for all the state change or prop change");
  });

  return (
    <div>
      <button onClick={handleInc}>Inc Count{count}</button>
      <button onClick={handleNameChange}>Change Name{name}</button>
    </div>
  );
};
