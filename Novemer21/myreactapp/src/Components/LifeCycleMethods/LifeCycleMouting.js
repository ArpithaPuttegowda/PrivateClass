import React, {Component} from "react";

class LifeCycleMouting extends Component {
  constructor(a) {
    super();
    this.state = {
      count: 0,
      name: "sachin"
    };
    console.log("constructor called", a.name);
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.count === 3) {
      return {
        count: 1000,
        name: "Dhoni"
      };
    }
  }

  render(a, b, c) {
    console.log("render called", this.props.name);
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Inc Count {this.state.count}...change Name...{this.state.name}
        </button>
      </div>
    );
  }
  componentDidMount(a, b, c) {
    debugger;
    console.log("componentDidMount");
  }
}

export default LifeCycleMouting;
