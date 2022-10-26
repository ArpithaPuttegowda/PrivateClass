import React, {Component, createRef} from "react";

export default class B extends Component {
  constructor() {
    super();
    this.locRef = createRef(null);
  }
  handleLoc = () => {
    let loc = this.locRef.current.value;
  };
  render() {
    return (
      <div>
        <input ref={this.locRef} />
        <button onClick={this.handleLoc}>Loc</button>
      </div>
    );
  }
}
