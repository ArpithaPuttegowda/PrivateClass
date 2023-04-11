import React from "react";

export const Hero = ({heroName}) => {
  try {
    if (heroName === "joker") {
      throw new Error("joker is not a hero");
    }
  } catch (e) {
    console.log(e);
  }

  return <div>Hero:::{heroName}</div>;
};
