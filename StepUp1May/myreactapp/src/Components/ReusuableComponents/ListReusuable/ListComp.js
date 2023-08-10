import React from "react";

export const ListComp = ({ data,title }) => {
  return (
    <div>
        <h1>{title} List</h1>
      {
        <ol>
          {data?.map((v, i) => {
            return <li key={v+i}>{v}</li>;
          })}
        </ol>
      }
    </div>
  );
};


