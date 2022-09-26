import React, {Fragment} from "react";
import {useInc} from "./useInc";

export const HoverCompF = () => {
  const [myCount, myHandleInc] = useInc(10);
  return (
    <Fragment>
      <h1 onMouseOver={myHandleInc}>Inc....{myCount}</h1>
    </Fragment>
  );
};
