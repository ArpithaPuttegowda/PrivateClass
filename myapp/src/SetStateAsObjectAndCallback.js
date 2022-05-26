import React, {Component} from "react";

export default class SetStateAsObjectAndCallback extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleInc = () => {
    //setState with callback to handle asynchrnous value effectively
    this.setState(
      {
        count: this.state.count + 1
      },
      () => console.log(this.state.count, "count value inside callback")
    );
    console.log(this.state.count, "count value");
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
