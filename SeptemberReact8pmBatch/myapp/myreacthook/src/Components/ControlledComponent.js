import React, {createRef} from "react";

export const ControlledComponent = () => {
  let data = {};
  const handleSubmit = () => {
    console.log(data, "final data");
  };
  const handleOnChange = (eve) => {
    let val = eve.target.value;
    let id = eve.target.id;
    data = {...data, [id]: val};
    console.log(data);
  };
  return (
    <div>
      <p>
        <b>Name</b>
        <input onChange={handleOnChange} id="name" />
      </p>
      <p>
        <b>Password</b>
        <input onChange={handleOnChange} id="pwd" />
      </p>
      <p>
        <b>Email</b>
        <input onChange={handleOnChange} id="email" />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
    </div>
  );
};
