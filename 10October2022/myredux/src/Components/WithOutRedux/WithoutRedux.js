import React, {useState} from "react";
import {A} from "./A";
import {B} from "./B";
import {C} from "./C";

export const WithoutRedux = () => {
  const [name, setName] = useState("");
  const getData = (myName) => {
    setName(myName);
  };
  return (
    <div>
      <A fn={getData} />
      <B />
      <C name={name} />
    </div>
  );
};
