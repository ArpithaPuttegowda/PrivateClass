import React, {Component} from "react";

export default class SetStateAsObject extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sachin"
    };
    this.name = "Sachin";
  }
  handleClick = () => {
    this.setState({
      name: "DHONI"
    });
  };
  render() {
    alert("123");
    return (
      <div>
        <button onClick={this.handleClick}>Change</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
