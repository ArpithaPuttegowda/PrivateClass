import React, {useState} from "react";
import {A} from "./A";
import {B} from "./B";
import {C} from "./C";

export const WithoutRedux = () => {
  const [name, setName] = useState("");
  const [loc, setLoc] = useState("");
  const getName = (data) => {
    setName(data);
  };
  const getLoc = (data) => {
    setLoc(data);
  };
  return (
    <div>
      <A fn={getName} />
      <B fl={getLoc} />
      <C name={name} loc={loc} />
    </div>
  );
};
