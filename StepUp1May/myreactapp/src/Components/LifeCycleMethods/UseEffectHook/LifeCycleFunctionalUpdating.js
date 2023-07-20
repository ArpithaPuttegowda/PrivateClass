import React, { useEffect, useState } from "react";

export const LifeCycleFunctionalUpdating = ({ color }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("sachin");
  const [city, setCity] = useState("Mumbai");
  //componetDidMount
  useEffect(() => {
    //call ajax sending request and fetching the data
  }, []);
  //componentDidUpdate
  useEffect(() => {
    alert("it will call for each and every state change");
  });
  //componentDidUpdate
  useEffect(() => {
    alert("this will get execute only when count will get change");
    if (name !== "sachin") {
      setCity("Ranchi");
    }
  }, [name]);

  return (
    <div>
      <h1>{color}</h1>
      <button onClick={() => setCount(count + 1)}>Count..{count}</button>
      <button onClick={() => setName("Dhoni")}>
        NameChange...{name}....{city}
      </button>
    </div>
  );
};
