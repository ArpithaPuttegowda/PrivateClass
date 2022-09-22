import React, {Component} from "react";

export default class SetStateWithCallback extends Component {
  state = {
    count: 0,
    name: "sachin"
  };
  handleInc = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  handleInc5 = () => {
    this.handleInc();
    this.handleInc();
    this.handleInc();
    this.handleInc();
    this.handleInc();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count</button>
        <button onClick={this.handleInc5}>Inc Count 5</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
