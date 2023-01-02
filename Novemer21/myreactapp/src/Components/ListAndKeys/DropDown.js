import React from "react";

export const DropDown = () => {
  const data = ["Ind", "Pak", "Japan", "US"];
  return (
    <div>
      <select>
        {data.map((country, index) => {
          return <option key={index}>{country}</option>;
        })}
      </select>
    </div>
  );
};
