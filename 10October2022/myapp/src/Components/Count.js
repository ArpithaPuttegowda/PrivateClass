import React, {Component} from "react";
import Text from "./Text";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    alert("render called");
    return (
      <div>
        <div>Count</div>
        <button onClick={this.handleInc}>Inc</button>
        <h1>{this.state.count}</h1>
        <Text />
      </div>
    );
  }
}

export default Count;
