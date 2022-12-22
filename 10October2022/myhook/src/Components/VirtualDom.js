import React, {useState} from "react";

export const VirtualDom = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {alert("rendered component")}
      <h1>5000lines</h1>
      <button onClick={() => setCount(count + 1)}>Inc Count...{count}</button>
    </div>
  );
};
