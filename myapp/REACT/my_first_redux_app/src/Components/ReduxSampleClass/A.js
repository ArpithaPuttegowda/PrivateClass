import React, {Component, createRef} from "react";
import myStore from "../../Store/store";
import {connect} from "react-redux";

class A extends Component {
  constructor() {
    super();
    this.nameRef = createRef(null);
  }
  handleName = () => {
    let name = this.nameRef.current.value;
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
// const msp = () => {
//   return {};
// };
const mdp = (dispatch) => {
  return {
    d: dispatch
  };
};
export default connect(null, mdp)(A);
