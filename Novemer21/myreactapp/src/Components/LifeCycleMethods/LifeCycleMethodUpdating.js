import React, {Component} from "react";

class LifeCycleMethodUpdating extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0
    };
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  shouldComponentUpdate() {
    console.log("should componentUpdate");
    return true;
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    alert("rendered");
    console.log("render called");
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count..{this.state.count}</button>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate() {
    console.log("GetSnapshotbeforeupdate");
    return null;
  }
}

export default LifeCycleMethodUpdating;
