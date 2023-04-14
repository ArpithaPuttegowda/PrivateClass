import React from "react";

export const DropDown = () => {
  const country = ["Ind", "Pak", "China", "Nepal", "UK"];
  return (
    <div>
      <select>
        {country.map((c, i) => {
          return <option key={c + i}>{c}</option>;
        })}
      </select>
    </div>
  );
};
