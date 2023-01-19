import React, {Component, PureComponent} from "react";

class ReactPureComp extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "sachin"
    };
  }
  handleChangeName = () => {
    this.setState({
      name: "sachin"
    });
  };
  render() {
    alert("render called");
    return (
      <div>
        <button onClick={this.handleChangeName}>
          Change Name ..{this.state.name}
        </button>
      </div>
    );
  }
}

export default ReactPureComp;
