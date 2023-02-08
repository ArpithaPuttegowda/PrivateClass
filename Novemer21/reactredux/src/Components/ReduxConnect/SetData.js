import React, {useRef} from "react";
import {connect} from "react-redux";

const SetData = ({d}) => {
  const inputRef = useRef(null);
  const handleChange = () => {
    let input = inputRef.current.value;
    d({
      type: "INPUT",
      payload: input
    });
  };
  return (
    <div>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
// const msp=()=>{}
const mdp = (dispatch) => {
  return {
    d: dispatch
  };
};

export default connect(null, mdp)(SetData);
