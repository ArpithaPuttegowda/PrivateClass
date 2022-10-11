import React from "react";

export const Input = ({lbl, type, required}) => {
  return (
    <p>
      <b>{lbl}</b>
      <input type={type} required={required} />
    </p>
  );
};
