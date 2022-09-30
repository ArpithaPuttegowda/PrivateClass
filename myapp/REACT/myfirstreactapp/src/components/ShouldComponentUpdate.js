import React, {Component} from "react";

export default class ShouldComponentUpdate extends Component {
  state = {
    name: "Sachin"
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name !== this.state.name) {
      return true;
    }
    return false;
  }
  render() {
    alert("render called");
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              name: "Dhoni"
            })
          }
        >
          Name Change
        </button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    alert("getSnapShot");
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name === "Sachin") {
      alert("this is sachin");
    }
  }
}
