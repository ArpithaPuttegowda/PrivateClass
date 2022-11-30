import React, {Component} from "react";

class UnMountingPhase extends Component {
  state = {
    isToggle: false
  };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({isToggle: !this.state.isToggle})}>
          Toggle
        </button>
        {this.state.isToggle && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    console.log("componentWillUnMount");
  }
  render() {
    return <div>Child</div>;
  }
}

export default UnMountingPhase;
