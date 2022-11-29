import React, {useState} from "react";

export const Parent = () => {
  const [data, setData] = useState("");
  const getData = (myData) => {
    setData(myData);
  };
  return (
    <div>
      <h1>Parent:::::{data}</h1>
      <Child fn={getData} />
    </div>
  );
};

const Child = ({fn}) => {
  const data = "sachin1234";
  const handleClick = () => {
    fn(data);
  };
  return (
    <div>
      <h1>Child</h1>
      <button onClick={handleClick}>Pass Data to Parent</button>
    </div>
  );
};
