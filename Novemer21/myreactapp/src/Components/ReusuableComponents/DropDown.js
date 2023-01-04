import React from "react";

export const DropDownReusuable = ({data, label}) => {
  return (
    <div>
      {data && (
        <>
          <span>{label}</span>
          <select>
            {data?.map((d, i) => {
              return <option key={i}>{d}</option>;
            })}
          </select>
        </>
      )}
    </div>
  );
};
