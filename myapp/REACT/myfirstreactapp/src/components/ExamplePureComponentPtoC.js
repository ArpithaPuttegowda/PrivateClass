import React, {Component, PureComponent} from "react";

export default class ExamplePureComponentPtoC extends Component {
  state = {
    count: 0
  };
  render() {
    alert("parent called");
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Inc Count{this.state.count}
        </button>
        <Child />
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    alert("child called");
    return <div>I'm Child</div>;
  }
}
