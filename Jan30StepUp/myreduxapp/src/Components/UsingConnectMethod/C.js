import React from "react";
import {connect} from "react-redux";

const C = ({n}) => {
  return (
    <div>
      <h1>Name:{n}</h1>
      <h1>Loc:</h1>
    </div>
  );
};
const msp = (state) => {
  return {
    n: state?.nlC?.name
  };
};
export default connect(msp)(C);
