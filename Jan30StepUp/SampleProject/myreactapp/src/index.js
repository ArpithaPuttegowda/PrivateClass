import React from "react";
import ReactDOM from "react-dom";
import s, {name, loc, runs} from "./App";

ReactDOM.render(
  <h1>
    Hyderabad...{name}..{loc}..{runs}...{s}
  </h1>,
  document.getElementById("root"),
  () => alert("called")
);
