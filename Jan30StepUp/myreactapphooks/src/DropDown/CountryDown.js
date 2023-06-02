import React from "react";

export const CountryDown = ({ country }) => {
  return (
    <select>
      {country?.map((c, i) => {
        return <option key={c}>{c}</option>;
      })}
    </select>
  );
};
