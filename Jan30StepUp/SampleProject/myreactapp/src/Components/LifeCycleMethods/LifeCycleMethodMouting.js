import React, {Component} from "react";

class LifeCycleMethodMouting extends Component {
  constructor(properties) {
    super();
    this.state = {
      count: 0,
      loc: "mumbai"
    };
    console.log("constructor called", properties);
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.count === 4) {
      return {
        loc: "Delhi"
      };
    }
  }

  shouldComponentUpdate(nextProps, nextState, {}) {
    return true;
  }

  handleCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render(a, b, c) {
    return (
      <div>
        <button onClick={this.handleCount}>Inc Count {this.state.count}</button>
        <p>{this.state.loc}</p>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {}
  componentDidUpdate(prevProp, prevState) {
    debugger;
  }
  componentDidMount(a, b, c) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((rawResp) => rawResp.json())
      .then((actualData) => console.log(actualData))
      .catch(() => console.log("something went wrong"));
    console.log("componentDidMount");
  }
}

export default LifeCycleMethodMouting;
