import React, {Component} from "react";

class UpdatingPhase extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0,
      name: "Sachin"
    };
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }
  incCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.incCount}>Inc Count</button>
        <h1>{this.state.count}</h1>
        <button
          onClick={() =>
            this.setState({
              name: "Dhoni"
            })
          }
        >
          ChangeName
        </button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    debugger;
    console.log("componentDidUpdate");
  }
}

export default UpdatingPhase;
