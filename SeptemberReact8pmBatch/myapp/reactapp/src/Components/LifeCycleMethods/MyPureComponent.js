import React, {PureComponent} from "react";

class MyPureComponent extends PureComponent {
  state = {
    name: "sachin"
  };
  render() {
    alert("render called");
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              name: "sachin"
            })
          }
        >
          Change name
        </button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default MyPureComponent;
