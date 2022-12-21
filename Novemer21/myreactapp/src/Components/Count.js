import React, {Component} from "react";

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
        5000lines of Code
        <button onClick={this.handleInc}>Inc Count</button>
        <h1>COUNT:::{this.state.count}</h1>
      </div>
    );
  }
}

export default Count;
