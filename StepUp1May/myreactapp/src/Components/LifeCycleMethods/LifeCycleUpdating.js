import React, { Component } from "react";

export default class LifeCycleUpdating extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }
  static getDerivedStateFromProps() {
    console.log("static method executed");
  }

  shouldComponentUpdate() {
    alert(this.state.count);
    console.log("shouldcomponentupate");
    return true;
  }
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Count....{this.state.count}
        </button>
        <h1>{this.props.n}</h1>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount executed");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpate");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
