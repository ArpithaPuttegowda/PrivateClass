import React, {useState} from "react";

export const CountF = () => {
  //state for functional component
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {console.log("return statement called")}
      <button onClick={incCount}>Inc Count ...{count}</button>
    </div>
  );
};
