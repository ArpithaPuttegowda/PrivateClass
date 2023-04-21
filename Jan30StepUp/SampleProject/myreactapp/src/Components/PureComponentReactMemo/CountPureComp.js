import React, {PureComponent, Component} from "react";

class CountPureComp extends PureComponent {
  state = {
    count: 10
  };
  handleCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    alert("parent called");
    return (
      <>
        <button onClick={this.handleCount}>
          Inc count..{this.state.count}
        </button>
        <Child />
      </>
    );
  }
}

export default CountPureComp;

class Child extends PureComponent {
  render() {
    alert("child called");
    return <div>child called</div>;
  }
}
