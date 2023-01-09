import React, {Component} from "react";

class LifeCycleUnMounting extends Component {
  state = {
    isToggle: true
  };
  handleChildLoad = () => {
    this.setState({
      isToggle: !this.state.isToggle
    });
  };
  render() {
    return (
      <div>
        {this.state.isToggle && <Child />}
        <button onClick={this.handleChildLoad}>Load Child</button>
      </div>
    );
  }
}

export default LifeCycleUnMounting;

class Child extends Component {
  constructor() {
    super();
    console.log("constructor called");
  }
  static getDerivedStateFromProps() {
    console.log("getDerivedState");
  }

  componentWillUnmount() {
    alert("componentWillunmount");
  }
  render() {
    console.log("render");
    return <div>Child</div>;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}
