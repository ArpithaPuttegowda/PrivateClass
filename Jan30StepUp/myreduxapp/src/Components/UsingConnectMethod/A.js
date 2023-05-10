import React, {useRef} from "react";
import {connect} from "react-redux";
import store from "../../Store/store";

const A = ({d}) => {
  // const dispatch=useDispatch()
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef?.current?.value;
    // d({
    //   type: "NAME_C",
    //   payload: name
    // });
    store.dispatch({
      type: "NAME_C",
      payload: name
    });
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};

const msp = () => {};
const mdp = (dispatch) => {
  return {
    d: dispatch
  };
};

export default connect(null, mdp)(A);
