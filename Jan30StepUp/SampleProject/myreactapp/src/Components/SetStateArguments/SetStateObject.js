import React, {Component} from "react";

class SetStateObject extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          Click...{this.state.count}
        </button>
      </div>
    );
  }
}

export default SetStateObject;
