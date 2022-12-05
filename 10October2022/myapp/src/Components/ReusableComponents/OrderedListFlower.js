import React from "react";

export const OrderedListFlower = () => {
  const flowers = ["Lilly", "Jasmin", "SunFlower"];
  return (
    <div>
      <ol>
        {flowers.map((flower, i) => {
          return <li key={i}>{flower}</li>;
        })}
      </ol>
    </div>
  );
};
