import React, { PureComponent } from "react";

export default class ExamplePureComponent extends PureComponent {
  state = {
    count: 0,
    name: "Sachin",
  };
  render() {
    alert("parent called");
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count...{this.state.count}
        </button>
        <button onClick={() => this.setState({ name: "Sachin" })}>
          Name Change...{this.state.name}
        </button>
        <Child />
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    alert("child called");
    return <div>I'm Child...</div>;
  }
}
