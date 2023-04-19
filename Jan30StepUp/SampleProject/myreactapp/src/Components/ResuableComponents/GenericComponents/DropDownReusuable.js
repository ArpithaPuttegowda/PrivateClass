import React from "react";

export const DropDownReusuable = ({data}) => {
  return (
    <p>
      {data ? (
        <select>
          {data?.map((v, i) => {
            return <option key={v + i}>{v}</option>;
          })}
        </select>
      ) : null}
    </p>
  );
};
