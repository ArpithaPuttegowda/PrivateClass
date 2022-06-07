import React from "react";

export const ControlledComponentsFunctional = () => {
  let obj = {};
  const handleClick = () => {
    console.log(obj, "Data object");
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    obj = {...obj, [name]: val};
  };
  return (
    <div>
      <p>
        <b>N1</b>
        <input name="n1" onChange={handleChange} />
      </p>
      <p>
        <b>N2</b>
        <input name="n2" onChange={handleChange} />
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};
