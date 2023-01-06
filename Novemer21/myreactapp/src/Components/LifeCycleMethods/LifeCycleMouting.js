import React, {Component} from "react";

class LifeCycleMouting extends Component {
  constructor() {
    super();
    console.log("constructor called");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedState");
  }

  render() {
    console.log("render called");
    return <div>LifeCycleMethods</div>;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default LifeCycleMouting;
