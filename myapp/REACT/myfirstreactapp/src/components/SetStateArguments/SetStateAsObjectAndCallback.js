import React, {Component} from "react";

export default class SetStateAsObjectAndCallback extends Component {
  state = {
    count: 0
  };
  handleInc = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log(this.state.count, "callback");
      }
    );
    console.log(this.state.count, "count");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
