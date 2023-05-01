import React from "react";
import {MyParent} from "./ForwardRef/ForwardRef";
import {ForwardRef2} from "./ForwardRef/ForwardRef2";
import {ForwardRefWithRealTime} from "./ForwardRef/Real Time/ForwardRefWithRealTime";

export const Home = () => {
  return (
    <p>
      {/* <MyParent />
      <ForwardRef2 /> */}
      <ForwardRefWithRealTime />
    </p>
  );
};
