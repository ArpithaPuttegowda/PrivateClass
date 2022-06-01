import React, {Component} from "react";

export default class LifeCycleMethods extends Component {
  //mounting
  constructor(p) {
    super(p);
    console.log("constructor got executed");
    this.state = {
      count: 0,
      isChildLoad: false,
      myName: p.name,
      RNO: 10
    };
    console.log(p.name, p.loc, "props", p.runs);
  }
  //mounting and also updating
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps");
    console.log(nextState, nextProps, "getDerv");
    return {
      myName: "WASEEM"
    };
  }

  //updating
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate", nextProps, nextState);
    // if (nextState.RNO !== this.state.RNO) {
    //   return true;
    // }
    // return false;
    return true;
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  //mounting and also updating
  render() {
    console.log("render", this.props.name);
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
        <button onClick={() => this.setState({RNO: 100})}>
          RoNOUpdate{this.state.RNO}
        </button>
        <h1>{this.state.myName}</h1>
      </div>
    );
  }
  //mounting
  componentDidMount() {
    console.log("componentDidMount");
  }

  //updating
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshot before update");
  }

  //updating
  componentDidUpdate(preProps, preState) {
    debugger;
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
