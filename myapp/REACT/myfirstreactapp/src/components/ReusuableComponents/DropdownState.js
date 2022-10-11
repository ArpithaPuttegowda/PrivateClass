import React from "react";

export const DropdownState = () => {
  const states = ["karnataka", "Telangana", "AP"];
  return (
    <select>
      {states.map((state) => {
        return <option>{state}</option>;
      })}
    </select>
  );
};
