import React, {Component} from "react";

class ParentC extends Component {
  constructor() {
    super();
    this.myData = "StepUp";
  }
  render() {
    return (
      <div>
        <Child data={this.myData} />
      </div>
    );
  }
}

export default ParentC;

class Child extends Component {
  render() {
    return <div>I'm Child...{this.props.data}</div>;
  }
}
