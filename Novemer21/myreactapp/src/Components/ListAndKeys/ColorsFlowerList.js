import React from "react";

export const ColorsFlowerList = () => {
  let colFlower = [
    {color: "red", flower: "rose"},
    {color: "white", flower: "Jasmin"},
    {color: "yellow", flower: "Lilly"}
  ];
  return (
    <div>
      {colFlower.map((obj, index) => {
        return (
          <React.Fragment key={index}>
            <h1>{obj.flower}</h1>
            <p>{obj.color}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};
