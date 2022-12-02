import React from "react";

export const DropDown = () => {
  let country = ["India", "Pak", "US", "UK"];
  return (
    <div>
      <select>
        {country.map((country, i) => {
          return <option key={i}>{country}</option>;
        })}
      </select>
    </div>
  );
};
