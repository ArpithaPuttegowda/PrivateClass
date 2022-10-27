import React, {Component, createRef} from "react";
import {connect} from "react-redux";

class B extends Component {
  constructor() {
    super();
    this.locRef = createRef(null);
  }
  handleLoc = () => {
    let loc = this.locRef.current.value;
    this.props.dis({
      type: "LOC_C",
      payload: loc
    });
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

const mdp = (d) => {
  return {
    dis: d
  };
};
export default connect(null, mdp)(B);
