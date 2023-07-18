import React, { Component } from "react";

export default class LifeCycleUnmounting extends Component {
  state = {
    isChild: true,
  };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isChild: !this.state.isChild })}>
          Toggle
        </button>
        {this.state.isChild && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("component is removing from the DOM");
  }
  render() {
    return <div>I'm Child</div>;
  }
}
