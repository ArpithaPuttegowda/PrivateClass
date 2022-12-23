import React, {useState} from "react";

export const ExampleParent = () => {
  const dataInParent = "Hyderabad";
  const [city, setCity] = useState("");
  const getData = (d) => {
    setCity(d);
  };
  return (
    <div>
      <h1>I'm Parent::::{city}</h1>
      <ExampleChild data={dataInParent} myData={getData} />
    </div>
  );
};

const ExampleChild = ({data, myData}) => {
  const dataInChild = "Mumbai";
  const handleClick = () => {
    myData(dataInChild);
  };
  return (
    <div>
      <h1>I'm Child::::{data}</h1>
      <button onClick={handleClick}>
        Click me to Pass the Data from Child to Parent
      </button>
    </div>
  );
};
