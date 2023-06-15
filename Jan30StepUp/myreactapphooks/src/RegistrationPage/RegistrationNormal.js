import React, { useState } from "react";

export const RegistrationNormal = () => {
  const [data, setData] = useState({
    name: "",
    pwd: "",
    email: "",
  });
  const handleClick = () => {
    console.log(data, "myData");
  };
  const handleChange = (eve) => {
    let k = eve.target.id;
    let value = eve.target.value;
    setData({
      ...data,
      [k]: value,
    });
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
