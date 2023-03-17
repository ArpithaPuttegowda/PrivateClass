import React, {Component} from "react";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "Sachin",
      result: "pass"
    };
    this.loc = "Pune";
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      name: "Dhoni",
      result: "fail"
    });
  };
  render() {
    alert("render called");
    return (
      <div>
        <button onClick={this.handleClick}>Count</button>
        <h1>{this.state.count}</h1>
        <h2>Name:{this.state.name}</h2>
        <h4>Result:{this.state.result}</h4>
        <h3>Loc:{this.loc}</h3>
      </div>
    );
  }
}

export default Count;
