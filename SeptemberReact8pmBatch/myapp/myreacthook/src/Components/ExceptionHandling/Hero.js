import React from "react";

export const Hero = ({heroName}) => {
  if (heroName === "joker") {
    throw new Error("joker is not a hero");
  }
  return <div>I'm... {heroName}</div>;
};
