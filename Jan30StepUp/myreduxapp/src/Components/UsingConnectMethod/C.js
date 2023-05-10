import React from "react";
import {connect} from "react-redux";
import store from "../../Store/store";

const C = ({n, l}) => {
  const state = store.getState();
  return (
    <div>
      store data from getState
      <h1>Name:{state.nlC.name}</h1>
      <h1>Loc:{state.nlC.loc}</h1>
      store data from connect method
      <h1>Name:{n}</h1>
      <h1>Loc:{l}</h1>
    </div>
  );
};
const msp = (state) => {
  return {
    n: state?.nlC?.name,
    l: state?.nlC?.loc
  };
};
export default connect(msp)(C);
