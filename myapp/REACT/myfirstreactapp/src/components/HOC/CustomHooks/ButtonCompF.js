import React from "react";
import {useInc} from "./useInc";

export const ButtonCompF = () => {
  const [myCount, myHandleInc] = useInc(2000);
  return (
    <React.Fragment>
      <button onClick={myHandleInc}>Inc....{myCount} </button>
    </React.Fragment>
  );
};
