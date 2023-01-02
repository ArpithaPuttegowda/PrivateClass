import React from "react";

export const Headers = () => {
  const headersData = ["Reactjs", "VueJs", "Electronjs", "AngularJs"];
  return (
    <React.Fragment>
      {headersData.map((header, index) => {
        return <h1 key={index}>{header}</h1>;
      })}
      <h2>Footer</h2>
    </React.Fragment>
  );
};
