import React, {Component} from "react";

export default class SetStateAsObject extends Component {
  state = {
    count: 0
  };
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
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
