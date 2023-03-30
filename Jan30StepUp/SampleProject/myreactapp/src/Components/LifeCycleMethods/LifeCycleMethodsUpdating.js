import React, {Component} from "react";

class LifeCycleMethodsUpdating extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0
    };
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Inc Count
        </button>
        <h1>{this.state.count}</h1>
        <h1>I'm Child:::{this.props.data}</h1>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default LifeCycleMethodsUpdating;
