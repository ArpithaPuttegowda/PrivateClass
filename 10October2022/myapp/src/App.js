import React from "react";
import {Parent} from "./Components/ChildToParent";
import {Parent2} from "./Components/ChildToParent2";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {PassingData} from "./Components/PassingData";
import {PassingDAta2} from "./Components/PassingDAta2";
import {WithContext} from "./Components/ContextAPI/WithContext";
import {WithoutContext} from "./Components/WithoutContext";
import {WithContext2} from "./Components/ContextAPI/withContext2";
import {Add} from "./Components/Add";

export const App = () => {
  return (
    <div>
      {/* <Count />
      <CountF /> */}
      {/* <PassingData /> */}
      {/* <PassingDAta2 /> */}
      {/* <Parent /> */}
      {/* <Parent2 /> */}
      {/* <WithoutContext /> */}
      {/* <WithContext /> */}
      {/* <WithContext2 /> */}
      <Add />
    </div>
  );
};
