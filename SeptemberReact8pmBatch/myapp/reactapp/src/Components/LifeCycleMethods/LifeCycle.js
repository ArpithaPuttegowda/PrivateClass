import React, {Component} from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  render() {
    console.log("render");
    return <div>LifeCycle</div>;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
}

export default LifeCycle;
