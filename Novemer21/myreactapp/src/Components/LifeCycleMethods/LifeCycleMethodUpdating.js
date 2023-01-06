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
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    console.log("render called");
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count..{this.state.count}</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

export default LifeCycleMethodUpdating;
