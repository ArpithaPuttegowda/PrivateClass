import React, {Component} from "react";

class SetStateObjectCallBack extends Component {
  constructor() {
    super();
    this.data = 0;
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        this.data = this.state.count + 100;
        console.log(this.data, "data");
      }
    );
    console.log(this.state.count + 100);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click...{this.state.count}</button>
      </div>
    );
  }
}

export default SetStateObjectCallBack;
