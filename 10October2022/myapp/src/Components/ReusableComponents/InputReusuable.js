import React from "react";

export const InputReusuable = ({lbl, type, name}) => {
  return (
    <div>
      <p>
        <b>{lbl}</b>
        <input type={type} name={name} />
      </p>
    </div>
  );
};
