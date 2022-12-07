import React, {Component} from "react";

class LifeCycleMethodMouting extends Component {
  componentDidMount() {
    console.log("componentDidMount got called");
  }
  constructor() {
    super();
    console.log("constructor got called");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps got called");
  }
  render() {
    console.log("render got called");
    return <div>LifeCycleMethods</div>;
  }
}

export default LifeCycleMethodMouting;
