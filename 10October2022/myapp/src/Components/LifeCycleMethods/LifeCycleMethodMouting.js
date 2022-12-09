import React, {Component} from "react";

class LifeCycleMethodMouting extends Component {
  constructor(properties) {
    super();
    this.state = {
      count: 0
    };
    console.log(properties, "props constructor");
    console.log("constructor got called");
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.count === 3) {
      return {
        count: 1000
      };
    }
  }
  render(a, b, c, d) {
    console.log(this.props, "props render");
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          Inc Count...{this.state.count}
        </button>
      </div>
    );
  }
  componentDidMount(a, b, c, d) {
    debugger;
    console.log("componentDidMount got called");
  }
}

export default LifeCycleMethodMouting;
