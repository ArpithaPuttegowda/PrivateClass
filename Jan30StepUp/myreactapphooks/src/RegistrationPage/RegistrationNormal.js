import React, { useState } from "react";

export const RegistrationNormal = () => {
  let data = {};
  const handleClick = () => {
    console.log(data, "myData");
  };
  const handleChange = (eve) => {
    let k = eve.target.id;
    let value = eve.target.value;
    data = {
      ...data,
      [k]: value,
    };
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <input id="name" placeholder="userName" onChange={handleChange} />
      <input id="pwd" placeholder="password" onChange={handleChange} />
      <input id="email" placeholder="email" onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
