import React from "react";

export const Hero = ({heroName, children}) => {
  if (heroName === "joker") {
    //exception
    throw new Error("Joker is not a hero...custom error message");
  }
  return (
    <div>
      I'm a Hero....{heroName}....{children}
    </div>
  );
};
