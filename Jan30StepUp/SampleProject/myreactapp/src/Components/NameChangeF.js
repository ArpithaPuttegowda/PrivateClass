import React, {useState} from "react";

export const NameChangeF = () => {
  const [name, setName] = useState("Sachin");
  const handleNameChange = () => {
    setName("Dhoni");
  };
  return (
    <div>
      <button onClick={handleNameChange}>Name Change...{name}</button>
    </div>
  );
};
