import React, { useRef, useState } from "react";

export const PassingDataFromChildToParent2 = () => {
  const [data, setData] = useState("");
  const getData = (d) => {
    setData(d);
  };
  return (
    <p>
      <h1>Parent:{data}</h1>
      <Child fn={getData} />
    </p>
  );
};

const Child = ({ fn }) => {
  const inputRef = useRef(null);
  const handleClick = () => {
    let value = inputRef.current.value;
    inputRef.current.value = "";
    fn(value);
  };
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Click me to share the input data to Parent
      </button>
    </div>
  );
};
