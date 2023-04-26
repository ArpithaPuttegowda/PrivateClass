import React from "react";

export const FlowerList = () => {
  const data = ["Rose", "Lilly", "Jasmin"];
  return (
    <>
      {data.map((f, i) => {
        return (
          <React.Fragment key={f + i}>
            <div>{f}</div>
            <p>{f}</p>
          </React.Fragment>
        );
      })}
    </>
  );
};
