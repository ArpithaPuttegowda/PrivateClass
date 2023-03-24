import React, {useState} from "react";

export const ParentFunctional = () => {
  const [name, setName] = useState("");
  const getData = (myData) => {
    setName(myData);
  };
  return (
    <div>
      <h1>I'm parent:::{name}</h1>
      <Child fn={getData} />
    </div>
  );
};

const Child = ({fn}) => {
  const data = "INDIA";
  return (
    <div>
      <button onClick={() => fn(data)}>Click me to pass to data</button>
    </div>
  );
};
