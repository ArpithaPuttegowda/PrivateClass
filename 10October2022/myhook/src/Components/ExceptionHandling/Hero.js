import React from "react";

export const Hero = ({heroName}) => {
  if (heroName === "joker") {
    throw new Error("Joker is not a hero...custom error message");
  }
  return <div>I'm a Hero....{heroName}</div>;
};
