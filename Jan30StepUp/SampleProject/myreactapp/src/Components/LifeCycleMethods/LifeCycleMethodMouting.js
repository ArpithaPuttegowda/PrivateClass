import React, {Component} from "react";

class LifeCycleMethodMouting extends Component {
  constructor() {
    super();
    this.state = {};
    console.log("constructor called");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("render called");
    return <div>Template.....123....</div>;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default LifeCycleMethodMouting;
