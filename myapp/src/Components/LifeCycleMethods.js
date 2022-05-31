import React, {Component} from "react";

export default class LifeCycleMethods extends Component {
  //mounting
  constructor() {
    super();
    console.log("constructor got executed");
    this.state = {
      count: 0,
      isChildLoad: false
    };
  }
  //mounting and also updating
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }

  //updating
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  //mounting and also updating
  render() {
    console.log("render");
    return (
      <div>
        LifeCycleMethods
        <button onClick={this.handleClick}>Click me</button>
        <h1>{this.state.count}</h1>
        {this.state.isChildLoad && <Child />}
        <button
          onClick={() => this.setState({isChildLoad: !this.state.isChildLoad})}
        >
          Toggle
        </button>
      </div>
    );
  }
  //mounting
  componentDidMount() {
    console.log("componentDidMount");
  }

  //updating
  getSnapshotBeforeUpdate() {
    console.log("getSnapshot before update");
  }

  //updating
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert(
      "I'm going to execute whenever component is going unmount from the dom"
    );
    clearInterval(this.id);
  }
  render() {
    return <div>I'm Child </div>;
  }
  componentDidMount() {
    this.id = setInterval(() => {
      console.log("setInterval called");
    }, 5000);
  }
}
