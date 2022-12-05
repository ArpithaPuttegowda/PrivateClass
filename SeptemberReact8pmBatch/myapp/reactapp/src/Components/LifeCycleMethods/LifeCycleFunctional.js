import React, {useEffect, useState} from "react";

export const LifeCycleFunctional = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [changeNo, setChangeNo] = useState(0);
  const [name, setName] = useState("Sachin");
  const incCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    alert("this will call only in first time load");
    setValue(count + 1);
  }, []);

  useEffect(() => {
    alert("this will call only count got changed");
  }, [count]);

  useEffect(() => {
    alert("this will call only name got changed");
  }, [name]);

  useEffect(() => {
    alert("this will call whenever any state or prop change will occur");
  });

  return (
    <div>
      <button onClick={incCount}>Inc Count</button>
      <h1>{count}...Count</h1>
      <h1>{value}....Value</h1>
      <h1>ChangeNumber..{changeNo}</h1>
      <button onClick={() => setName("Dhoni")}>Name...{name}</button>
    </div>
  );
};
