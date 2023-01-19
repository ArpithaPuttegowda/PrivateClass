import React, {Component, PureComponent} from "react";

class ReactPureComp2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleIncCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    alert("render called");
    return (
      <div>
        <button onClick={this.handleIncCount}>
          Inc count ..{this.state.count}
        </button>
        <Child />
      </div>
    );
  }
}

export default ReactPureComp2;

class Child extends PureComponent {
  render() {
    alert("child called");
    return <div>Child</div>;
  }
}
