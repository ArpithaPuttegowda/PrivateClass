import React, {useState} from "react";

export const IncCount = () => {
  const [count, setCount] = useState(100);
  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleInc}>Inc Count</button>
      <h1>{count}</h1>
    </div>
  );
};
