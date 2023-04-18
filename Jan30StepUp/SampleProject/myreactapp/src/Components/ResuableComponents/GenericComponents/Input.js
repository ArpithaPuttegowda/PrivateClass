import React from "react";

export const InputReusuable = ({label, type}) => {
  return (
    <p>
      <b>{label}</b>
      <input type={type} />
    </p>
  );
};
