import React from "react";

export const Hero = ({heroName, children}) => {
  if (heroName === "joker") {
    throw new Error("joker is not a hero");
  }
  return (
    <div>
      Hero:::{heroName}...{children}
    </div>
  );
};
