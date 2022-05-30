import React, {Component} from "react";
import myHOC from "./MyHOC";

class Hover extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.method}>
          HOVER ON ME ...{this.props.count}
        </h1>
      </div>
    );
  }
}
export default myHOC(Hover);
