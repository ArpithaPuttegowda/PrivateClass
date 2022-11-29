import React, {useState} from "react";

export const PassingDAta2 = () => {
  const [data, setData] = useState("");
  const handleClick = () => {
    setData("Lekhya");
  };
  return (
    <div>
      <button onClick={handleClick}>Pass Data</button>
      <Example myData={data} />
    </div>
  );
};

const Example = ({myData}) => {
  return <div>GEt data:::{myData}</div>;
};
