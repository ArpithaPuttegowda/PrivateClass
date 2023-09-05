import React, { Component } from "react";

export default class LifeCycleUpdating extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0,
      name:"Sachin"
    };
  }
  static getDerivedStateFromProps() {
    console.log("static method executed");
  }

  shouldComponentUpdate(nextProps,nextState) {
   return true
  }
  render() {
    console.log("render");
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Count....{this.state.count}
        </button>
        <h1>{this.props.n}</h1>
        <button onClick={()=>this.setState({
          name:"Sachin"
        })}>Set name</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount executed");
  }
  getSnapshotBeforeUpdate(prevProps,prevState) {
      console.log("getSnapshotBeforeUpate");
  }
  componentDidUpdate(prevProps,prevState) {
    debugger
    console.log("componentDidUpdate");
  }
}
