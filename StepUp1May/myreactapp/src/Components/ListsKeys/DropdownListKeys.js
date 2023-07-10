import React from "react";

export const DropdownListKeys = () => {
  let countries;
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
