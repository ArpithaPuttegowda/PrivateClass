import React, {useRef} from "react";
import {connect} from "react-redux";
import store from "../../store/store";

const B = ({dispatch}) => {
  const locRef = useRef(null);
  const handleLoc = () => {
    let loc = locRef.current.value;
    // store.dispatch({
    //   type: "LOC_F",
    //   loc
    // });
    dispatch({
      type: "LOC_F",
      loc
    });
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};

const mdp = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(null, mdp)(B);
