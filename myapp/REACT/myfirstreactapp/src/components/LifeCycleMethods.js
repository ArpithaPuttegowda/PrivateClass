import React, {Component} from "react";

export default class LifeCycleMethods extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      name: "sachin"
    };
    console.log("constructor got executed", props.name, props.runs);
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.count === 4) {
      return {
        count: 60000,
        name: "kohli"
      };
    }
    console.log("getDerivedStateFromProps got executed");
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render(a, b, c) {
    console.log("render got executed", this.props);
    return (
      <div>
        <button onClick={this.handleInc}>Inc count</button>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
  componentDidMount(a, b, c) {
    console.log("componentDidMount executed");
  }
}
