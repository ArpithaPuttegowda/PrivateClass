import React, {Component} from "react";

export default class SetStateCallback extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  handleClick5 = () => {
    this.handleClick();
    this.handleClick();
    this.handleClick();
    this.handleClick();
    this.handleClick();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Inc Count1</button>
        <button onClick={this.handleClick5}>Inc Count5</button>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count1}</h1>
      </div>
    );
  }
}
