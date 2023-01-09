import React, {Component, createRef} from "react";
import {connect} from "react-redux";
import store from "../../store/store";

class BC extends Component {
  constructor() {
    super();
    this.locRef = createRef(null);
  }
  handleLoc = () => {
    const loc = this.locRef.current.value;
    // store.dispatch({
    //   type: "LOC_C",
    //   payload: loc
    // });
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
export default connect(null, mdp)(BC);
