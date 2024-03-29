import React from "react";

export const RenderColorFlower = () => {
  const colFlower = [
    {clr: "white", flr: "Jasmin"},
    {clr: "Red", flr: "Rose"},
    {clr: "yellow", flr: "lilly"},
    {clr: "orange", flr: "sunflower"},
    {clr: "pink", flr: "hibscus"}
  ];
  return (
    <div>
      <h1>Flowers with colors</h1>
      {colFlower.map((obj, i) => {
        return <ClrFlr key={i + obj?.clr} obj={obj} />;
      })}
    </div>
  );
};

const ClrFlr = ({obj}) => {
  return (
    <p>
      <span>{obj?.clr}</span>
      <div>{obj?.flr}</div>
    </p>
  );
};
