import React from "react";
import {myHoc} from "./myHoc";

const ButtonComp = ({count, handleCount}) => {
  return (
    <div>
      <button onClick={handleCount}>Inc Count {count}</button>
    </div>
  );
};

export default myHoc(ButtonComp);
