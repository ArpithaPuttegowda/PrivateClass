import React from "react";
import {Parent} from "./Components/ChildToParent";
import {Parent2} from "./Components/ChildToParent2";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {PassingData} from "./Components/PassingData";
import {PassingDAta2} from "./Components/PassingDAta2";

export const App = () => {
  return (
    <div>
      {/* <Count />
      <CountF /> */}
      {/* <PassingData /> */}
      {/* <PassingDAta2 /> */}
      {/* <Parent /> */}
      <Parent2 />
    </div>
  );
};
