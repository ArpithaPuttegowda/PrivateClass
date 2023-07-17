import React, { Component } from "react";

export default class LifeCycleMounting extends Component {
  constructor() {
    super();
    console.log("constructor executed");
  }

  static getDerivedStateFromProps() {
    console.log("static method executed");
  }
  render() {
    console.log("render executed");
    return <div>LifeCycleMounting</div>;
  }
  componentDidMount() {
    console.log("componentDidMount executed");
  }
}
