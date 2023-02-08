import React from "react";
import {connect} from "react-redux";

const GetData = ({inputData}) => {
  return <div>{inputData}</div>;
};

const msp = (s) => {
  return {
    inputData: s?.nl?.input
  };
};

export default connect(msp)(GetData);
