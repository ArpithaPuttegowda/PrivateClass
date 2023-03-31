import React, {Component} from "react";

class LifeCycleMethodMouting extends Component {
  constructor() {
    super();
    this.state = {};
    console.log("constructor called");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");

    return null;
  }
  handleAjax = () => {};
  render() {
    console.log("render called");
    return (
      <div>
        Get Data in the first time load
        {/* <button onClick={this.handleAjax}>Click me </button> */}
      </div>
    );
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((raw) => raw.json())
      .then((actualData) => console.log(actualData))
      .catch(() => console.log("something went wrong"));
    console.log("componentDidMount");
  }
}

export default LifeCycleMethodMouting;
