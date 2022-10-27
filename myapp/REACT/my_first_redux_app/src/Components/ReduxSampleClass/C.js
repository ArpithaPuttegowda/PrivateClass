import React, {Component} from "react";
import {connect} from "react-redux";

class C extends Component {
  render() {
    return (
      <div>
        <h1>NAME:{this.props.n}</h1>
        <h1>LOC:{this.props.l}</h1>
      </div>
    );
  }
}
const msp = (state) => {
  return {
    n: state.nameLocRedClass.name,
    l: state.nameLocRedClass.loc
  };
};
export default connect(msp)(C);
