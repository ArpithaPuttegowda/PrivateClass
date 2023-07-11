import React from "react";

export const DropdownListKeys = () => {
  let countries = ["Ind", "Pak", "US"];
  return (
    <div>
      Dropdown
      <select>
        {countries?.map((c, i) => {
          return <option key={c + i}>{c}</option>;
        })}
      </select>
    </div>
  );
};
