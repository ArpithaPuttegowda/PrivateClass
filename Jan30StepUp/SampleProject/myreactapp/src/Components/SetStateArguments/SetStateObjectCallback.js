import React, {Component} from "react";

class SetStateObjectCallBack extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    debugger;
    this.setState(
      {
        count: this.state.count + 1
      },
      () => console.log(this.state.count, "count inside the callback")
    );
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
