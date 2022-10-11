import React from "react";

export const Dropdown = ({data}) => {
  return (
    <select>
      {data?.map((dropdownItem) => {
        return <option>{dropdownItem}</option>;
      })}
    </select>
  );
};
