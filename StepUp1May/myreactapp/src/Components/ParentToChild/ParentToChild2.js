import { useState } from "react";

export const Parent2 = () => {
  const city_name = "PUNE";
  const [city, setCity] = useState("");
  const handleChangeData = () => {
    setCity(city_name);
  };
  return (
    <div>
      <h1>I'm Parent</h1>
      <button onClick={handleChangeData}>
        Click me to Pass data from Parent to Child
      </button>
      <Child2 data={city} />
    </div>
  );
};

const Child2 = ({ data }) => {
  return <div>I'm Child....{data}</div>;
};
