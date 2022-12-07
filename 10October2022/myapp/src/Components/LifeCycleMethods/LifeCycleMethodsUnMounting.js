import React, {Component} from "react";

class LifeCycleMethodsUnMounting extends Component {
  constructor() {
    super();
    this.state = {
      isChild: true
    };
  }
  handleToggle = () => {
    this.setState({
      isChild: !this.state.isChild
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
        {this.state.isChild && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("unmounting");
  }
  render() {
    return <div>Child</div>;
  }
}
export default LifeCycleMethodsUnMounting;
