import React, {Component} from "react";

class LifeCycleMethodUpdating extends Component {
  constructor() {
    super();
    this.state = {
      name: "sachin"
    };
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name !== this.state.name) {
      return true;
    }
    return false;
  }
  handleInc = () => {
    this.setState({
      name: "dhoni"
    });
  };
  render() {
    alert("render called");
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count..{this.state.name}</button>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProp, preState) {
    console.log("GetSnapshotbeforeupdate");
    return null;
  }
  componentDidUpdate(prevProp, preState) {
    debugger;
    console.log("componentDidUpdate");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default LifeCycleMethodUpdating;
