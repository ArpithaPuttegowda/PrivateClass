import React, {Component} from "react";

class UpdatingPhase extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0
    };
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  incCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.incCount}>Inc Count</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}

export default UpdatingPhase;
