import React from "react";

export const DropdownCountry = () => {
  const countries = ["India", "PAk", "US"];
  return (
    <select>
      {countries.map((country) => {
        return <option>{country}</option>;
      })}
    </select>
  );
};
