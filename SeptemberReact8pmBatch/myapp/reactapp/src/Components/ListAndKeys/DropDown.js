import React from "react";

export const DropDown = () => {
  let data = ["PAK", "India"];
  return (
    <div>
      {data ? (
        <select>
          {data?.map((v, i) => {
            return <option key={v + i}>{v}</option>;
          })}
        </select>
      ) : (
        <h1>Data is not available</h1>
      )}
    </div>
  );
};
