import React, { Component } from "react";

export default class LifeCycleMounting extends Component {
  constructor() {
    super();
    console.log("constructor executed");
    this.state = {
      name: "Sachin",
    };
  }
  static getDerivedStateFromProps() {
    console.log("static method executed");
    return {
      name: "Dhoni",
    };
  }
  handleAjax = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    console.log("render executed");
    return <div>Ajax...{this.state.name}</div>;
  }
  componentDidMount() {
    this.handleAjax();
  }
}
