import React, {useEffect, useState} from "react";

export const LifeCycleMethodF = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sachin");
  //componentDidMount
  useEffect(() => {
    console.log("AJAX");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((rawResp) => rawResp.json())
      .then((actualData) => console.log(actualData))
      .catch(() => console.log("something went wrong"));
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("I'm gonna executed for all the state and props changes");
  }, [count]);

  const handleNameChange = () => {
    setName("Dhoni");
  };
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me{count}</button>
      <button onClick={handleNameChange}>Change Name...{name}</button>
    </div>
  );
};

//componentDidUpdate
// useEffect(()=>{})
