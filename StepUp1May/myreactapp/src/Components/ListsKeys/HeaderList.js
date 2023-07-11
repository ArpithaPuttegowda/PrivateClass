import React, { Fragment } from "react";

export const HeaderList = () => {
  const data = [
    { heading1: "Karnataka", heading2: "Bangalore", heading3: "Mysore" },
    { heading1: "Telangana", heading2: "Hyd", heading3: "Nijamabad" },
    { heading1: "Maharastra", heading2: "Pune", heading3: "Mumbai" },
  ];
  return (
    <>
      {data?.map((obj, i) => {
        const { heading1, heading2, heading3 } = obj;
        return (
          <Fragment key={i + heading1}>
            <h1>{heading1}</h1>
            <h2>{heading2}</h2>
            <h3>{heading3}</h3>
          </Fragment>
        );
      })}
    </>
  );
};
