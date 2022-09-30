import React, {PureComponent} from "react";

export default class ExamplePureComponent extends PureComponent {
  state = {
    name: "Sachin"
  };
  render() {
    alert("render called");
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              name: "Sachin"
            })
          }
        >
          Name Change
        </button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
