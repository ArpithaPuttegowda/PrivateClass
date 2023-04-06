import React, {Component} from "react";

class SetStateCallback extends Component {
  state = {
    count: 0,
    name: "Dhoni"
  };
  handleClick1 = () => {
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  handleClick5 = () => {
    // this.setState({
    //   count: this.state.count + 5
    // });
    this.handleClick1();
    this.handleClick1();
    this.handleClick1();
    this.handleClick1();
    this.handleClick1();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>Inc Count 1</button>
        <button onClick={this.handleClick5}>Inc Count 5</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default SetStateCallback;
