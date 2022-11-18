import React, {Component} from "react";

export default class Parent extends Component {
  //   state = {
  //     name: ""
  //   };
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  getData = (d) => {
    this.setState({
      name: d
    });
  };
  render() {
    return (
      <p>
        Parent:::: {this.state.name}
        <Child fn={this.getData} />
      </p>
    );
  }
}

class Child extends Component {
  constructor() {
    super();
    this.data = "Arpitha";
  }
  handleClick = () => {
    this.props.fn(this.data);
  };
  render() {
    return (
      <p>
        Child:::
        <button onClick={this.handleClick}>
          Passing Data from Child to Parent{" "}
        </button>
      </p>
    );
  }
}
