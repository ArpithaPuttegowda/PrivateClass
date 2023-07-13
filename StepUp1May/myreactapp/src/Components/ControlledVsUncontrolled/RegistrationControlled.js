import React from "react";

export const RegistrationControlled = () => {
  let data = {};
  const handleSubmit = (eve) => {
    debugger;
  };
  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    data = { ...data, [key]: value };
    console.log(data, "data");
  };
  return (
    <div>
      <p>
        <b>Name:</b>
        <input id="name" onChange={handleChange} />
      </p>
      <p>
        <b>Loc:</b>
        <input id="loc" onChange={handleChange} />
      </p>
      <p>
        <b>Phone No:</b>
        <input type="number" id="phn" onChange={handleChange} />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
