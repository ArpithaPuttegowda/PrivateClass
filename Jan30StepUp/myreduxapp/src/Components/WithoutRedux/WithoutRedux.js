import React, {useState} from "react";
import {A} from "./A";
import {B} from "./B";
import {C} from "./C";

const WithoutRedux = () => {
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
      <A getName={getName} />
      <B getLoc={getLoc} />
      <C n={name} l={loc} />
    </div>
  );
};

export default WithoutRedux;
