import React, {Component} from "react";

class LifeCycleMethodMouting extends Component {
  constructor(properties) {
    debugger;
    super();
    console.log(properties.name, "props constructor");
    console.log("constructor got called");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps got called");
  }
  render() {
    console.log(this.props, "props render");
    return <div>LifeCycleMethods</div>;
  }
  componentDidMount() {
    console.log("componentDidMount got called");
  }
}

export default LifeCycleMethodMouting;
