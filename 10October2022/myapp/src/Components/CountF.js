import React, {useState} from "react";

export const CountF = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <>
      {alert("return called")}
      <div>
        <button onClick={handleInc}>Inc Count</button>
        <h1>{count}</h1>
      </div>
    </>
  );
};
