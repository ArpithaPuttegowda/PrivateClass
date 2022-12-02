import React from "react";

export const Header = () => {
  const data = ["React", "Vue", "Angular", "Electronjs", "Nodejs"];
  return (
    <React.Fragment>
      {data.map((heading, i) => {
        return <h1 key={heading}>{heading}</h1>;
      })}
    </React.Fragment>
  );
};
