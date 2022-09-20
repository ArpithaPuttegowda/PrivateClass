import React, {Component} from "react";

export default class LifeCycleMethodsUpdation extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    console.log("constructor got executed");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps got executed");
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("render got executed");
    return (
      <div>
        <button onClick={this.handleInc}>Inc count</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount executed");
  }
}
