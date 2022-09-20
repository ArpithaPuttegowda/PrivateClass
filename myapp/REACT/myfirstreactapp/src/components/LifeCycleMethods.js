import React, {Component} from "react";

export default class LifeCycleMethods extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    console.log("constructor got executed");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps got executed");
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    console.log("render got executed");
    return (
      <div>
        <button onClick={this.handleInc}>Inc count</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount executed");
  }
}
