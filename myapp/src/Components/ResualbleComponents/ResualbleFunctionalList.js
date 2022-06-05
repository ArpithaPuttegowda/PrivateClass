import React from "react";

export const ResualbleFunctionalList = ({data}) => {
  return (
    <div>
      <ul>
        {data?.map((v, i) => {
          return <li>{v}</li>;
        })}
      </ul>
    </div>
  );
};
