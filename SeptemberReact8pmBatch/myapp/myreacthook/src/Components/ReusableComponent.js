import React from "react";

export const ReusableComponent = ({data}) => {
  return (
    <div>
      <select>
        {data?.map((v, i) => {
          return <option key={i}>{v}</option>;
        })}
      </select>
    </div>
  );
};
