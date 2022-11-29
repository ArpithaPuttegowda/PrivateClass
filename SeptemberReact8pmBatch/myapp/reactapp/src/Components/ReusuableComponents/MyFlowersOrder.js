import React from "react";

export const MyFlowersOrder = () => {
  const data = [
    {name: "arpitha", loc: "Karnataka"},
    {name: "lekhya", loc: "Karnataka"}
  ];
  const flowers = ["jasmin", "lilly", "rose"];
  return (
    <>
      <div>Flower</div>
      <div>Name</div>
      {data.map((obj, i) => {
        return (
          <React.Fragment key={i}>
            <p>{obj.name}</p>
            <p>{obj.loc}</p>
          </React.Fragment>
        );
      })}
      <ol>
        {flowers.map((flower, i) => {
          return <li key={i + flower}>{flower}</li>;
        })}
      </ol>
    </>
  );
};
