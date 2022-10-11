import React from "react";

export const OrderedListColors = () => {
  const colors = ["red", "blue", "green", "magenta"];
  const flowerColor = [
    {flowerName: "lilly", color: "blue"},
    {flowerName: "Rose", color: "red"},
    {flowerName: "jasmin", color: "white"}
  ];
  return (
    <div>
      <ol>
        {colors?.map((color) => {
          return <li>{color}</li>;
        })}
      </ol>
      <h1>Flower with it's color</h1>
      {flowerColor?.map((obj, index) => {
        return (
          <React.Fragment key={index + obj.color}>
            <h1>Flower ...{obj.flowerName}</h1>
            <p>Color... {obj.color}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};
