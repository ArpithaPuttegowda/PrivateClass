import React from "react";

export const DropDown = ({data, header}) => {
  return (
    <div>
      <h1>{header}</h1>
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
