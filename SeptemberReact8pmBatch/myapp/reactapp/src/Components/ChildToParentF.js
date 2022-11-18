import React, {useState} from "react";

export const ParentF = () => {
  const [name, setName] = useState("");
  const getData = (d) => {
    setName(d);
  };
  return (
    <div>
      Parent:::{name}
      <Child fn={getData} />
    </div>
  );
};

export const Child = ({fn}) => {
  const name = "Arpitha";
  const handleClick = () => {
    fn(name);
  };
  return (
    <div>
      Child:::
      <button onClick={handleClick}>Passing Data from Child to Parent</button>
    </div>
  );
};
