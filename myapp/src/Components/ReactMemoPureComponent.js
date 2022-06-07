import React, {Component, PureComponent} from "react";

export default class ReactMemoPureComponent extends PureComponent {
  state = {
    count: 0
  };
  render() {
    alert("Parent called");
    return (
      <div>
        <button onClick={() => this.setState({count: 0})}>Inc count</button>
        <h1>{this.state.count}</h1>
        <Child />
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    alert("Child called");
    return <>I'm Child component</>;
  }
}
