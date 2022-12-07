import React, {Component} from "react";

class LifeCycleMethodsUpdating extends Component {
  //Mounting
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0
    };
  }
  //Mounting and updating
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  //updating
  shouldComponentUpdate() {
    console.log("ShouldComponentUpdate");
    return false;
  }
  //Mounting and updating
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Inc Count{this.state.count}
        </button>
      </div>
    );
  }
  //updating
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotbeforeUpdate");
  }
  //updating
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  //Mounting
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default LifeCycleMethodsUpdating;
