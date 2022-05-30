import React, {Component} from "react";
import myHOC from "./MyHOC";

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.method}>
          Click me..{this.props.count}
        </button>
      </div>
    );
  }
}
export default myHOC(Button);
