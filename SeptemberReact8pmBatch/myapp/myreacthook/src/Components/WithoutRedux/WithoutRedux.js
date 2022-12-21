import React, {useState} from "react";
import {A} from "./A";
import {B} from "./B";
import {C} from "./C";

export const WithoutRedux = () => {
  const [name, setName] = useState("");
  const getName = (data) => {
    setName(data);
  };
  return (
    <div>
      <A fn={getName} />
      <B />
      <C name={name} />
    </div>
  );
};
