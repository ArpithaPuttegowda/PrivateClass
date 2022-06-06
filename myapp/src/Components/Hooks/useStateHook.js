import React, {useState} from "react";

export const Example = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("DHONI");
  const [data, setData] = useState({color: "", sweet: ""});
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h1>{count}</h1>
      <button onClick={() => setName("Sachin")}>Update Name</button>
      <h1>{name}</h1>
      <button onClick={() => setData({color: "red", sweet: "Jamun"})}>
        Update Data
      </button>
      <h1>
        {data.color}...{data.sweet}
      </h1>
    </div>
  );
};
