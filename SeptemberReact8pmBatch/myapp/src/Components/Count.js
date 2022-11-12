import React, {Component} from "react";

class Count extends Component {
  constructor() {
    super();
    console.log(this, "constructor");
    this.state = {
      count: 0,
      name: "sachin"
    };
  }
  incCount = () => {
    console.log(this, "current object incCount");
    this.setState({
      count: this.state.count + 1,
      name: "DHONI"
    });
  };

  render() {
    console.log("render got called", this);
    return (
      <div>
        <button onClick={this.incCount}>Inc Count</button>

        <h1>
          {this.state.count}....{this.state.name}
        </h1>
      </div>
    );
  }
}

export default Count;
