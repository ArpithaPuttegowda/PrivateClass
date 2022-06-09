import React, {useState} from "react";
import {A} from "./A";
import {B} from "./B";
import {C} from "./C";

export const Sample = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const getName = (n) => {
    console.log(n);
    setName(n);
  };
  const getLoc = (loc) => {
    console.log(loc);
    setLocation(loc);
  };
  return (
    <div>
      <A a={getName} />
      <B b={getLoc} />
      <C n={name} l={location} />
    </div>
  );
};
