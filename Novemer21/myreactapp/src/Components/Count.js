import React, {Component} from "react";

class Count extends Component {
  constructor() {
    super();
    this.count = 0;
  }
  fn = () => {
    this.count = this.count + 1;
    console.log(this.count, "count");
  };
  render() {
    alert("render called");
    return (
      <div>
        <button onClick={this.fn}>Inc Count</button>
        <h1>COUNT:::{this.count}</h1>
      </div>
    );
  }
}

export default Count;
