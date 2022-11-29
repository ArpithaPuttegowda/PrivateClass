import React from "react";

export const DropDown = ({data}) => {
  return (
    <div>
      <select>
        {data?.map((v, i) => {
          return <option>{v}</option>;
        })}
      </select>
    </div>
  );
};
