import React from "react";

export const DropDownReusuable = ({data}) => {
  return (
    <p>
      <select>
        {data?.map((v, i) => {
          return <option key={i}>{v}</option>;
        })}
      </select>
    </p>
  );
};
