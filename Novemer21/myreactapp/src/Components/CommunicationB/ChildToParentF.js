import React, {useState} from "react";

export const ParentF = () => {
  const [name, setName] = useState("");
  const getData = (d) => {
    setName(d);
  };

  return (
    <div>
      <h1>I'm Parent:::{name}</h1>
      <Child myData={getData} />
    </div>
  );
};

const Child = ({myData}) => {
  const data = "Sachin";
  const handleClick = () => {
    myData(data);
  };
  return (
    <div>
      <button onClick={handleClick}>Pass Data</button>
    </div>
  );
};
