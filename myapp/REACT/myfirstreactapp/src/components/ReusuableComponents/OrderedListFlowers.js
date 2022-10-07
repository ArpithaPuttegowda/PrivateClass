import React from "react";

export const OrderedListFlowers = () => {
  const flowers = ["lilly", "jasmin", "Sun flowers"];
  return (
    <div>
      <ol>
        {flowers.map((flower) => {
          return <li>{flower}</li>;
        })}
      </ol>
    </div>
  );
};
