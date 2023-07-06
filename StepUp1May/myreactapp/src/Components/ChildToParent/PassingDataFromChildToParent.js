import { useState } from "react";

export const Parent3 = () => {
  const [data, setData] = useState("");
  const callback = (d) => {
    setData(d);
  };

  return (
    <div>
      <h1>I'm Parent....{data}</h1>
      <Child myData={callback} />
    </div>
  );
};

const Child = ({ myData }) => {
  const data = "Sachin";
  const handleClick = () => {
    myData(data);
  };
  return (
    <div>
      <button onClick={handleClick}>
        Click me to pass data from child to parent
      </button>
    </div>
  );
};
