import React, {Component} from "react";

class Count extends Component {
  incCount = () => {
    alert(123);
  };
  render() {
    return (
      <div>
        <button onClick={this.incCount}>Inc Count</button>
        <h1>0</h1>
      </div>
    );
  }
}

export default Count;
