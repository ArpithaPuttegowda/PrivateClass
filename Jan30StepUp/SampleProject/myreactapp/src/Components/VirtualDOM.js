import React, {Component} from "react";

class VirtualDOM extends Component {
  state = {
    count: 0
  };
  render() {
    alert("render called");
    return (
      <div>
        50000lines
        <button
          onClick={() => {
            this.setState({count: this.state.count + 1});
          }}
        >
          Count...{this.state.count}
        </button>
      </div>
    );
  }
}

export default VirtualDOM;
