import React, {useState} from "react";

export const VirtualDOM = () => {
  const [count, setCount] = useState(0);
  alert("component executed");
  return (
    <div>
      5000lines
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
};
