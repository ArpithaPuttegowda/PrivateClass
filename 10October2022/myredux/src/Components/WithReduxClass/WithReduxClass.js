import React, {Component} from "react";
import AC from "./AC";
import BC from "./BC";
import CC from "./CC";

class WithReduxClass extends Component {
  render() {
    return (
      <div>
        <AC />
        <BC />
        <CC />
      </div>
    );
  }
}

export default WithReduxClass;
