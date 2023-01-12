import React, {Component} from "react";
import {Hero} from "../ExceptionHandling/Hero";

class LifeCycleMethodUpdating extends Component {
  constructor() {
    super();
    this.state = {
      name: "sachin",
      isError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      isError: true
    };
  }

  componentDidCatch(e) {
    console.log(e);
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
        {this.state.isError ? (
          <h1>Something went wrong </h1>
        ) : (
          <>
            <Hero heroName="joker" />
            <button onClick={this.handleInc}>
              Inc Count..{this.state.name}
            </button>
          </>
        )}
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
