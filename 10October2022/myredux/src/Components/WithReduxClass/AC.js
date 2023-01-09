import React, {Component, createRef} from "react";
import {connect} from "react-redux";
import store from "../../store/store";

class AC extends Component {
  constructor() {
    super();
    this.nameRef = createRef(null);
  }
  handleName = () => {
    let name = this.nameRef.current.value;
    // store.dispatch({
    //   type: "NAME_C",
    //   payload: name
    // });
    this.props.d({
      type: "NAME_C",
      payload: name
    });
  };
  render() {
    return (
      <div>
        <input ref={this.nameRef} />
        <button onClick={this.handleName}>Name</button>
      </div>
    );
  }
}

const msp = () => {};
const mdp = (dispatch) => {
  return {
    d: dispatch
  };
};

export default connect(msp, mdp)(AC);
