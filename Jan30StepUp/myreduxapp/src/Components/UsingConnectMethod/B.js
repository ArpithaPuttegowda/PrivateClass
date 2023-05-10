import React, {useRef} from "react";
import {connect} from "react-redux";
import store from "../../Store/store";

const B = ({dispatch}) => {
  const locRef = useRef(null);
  const handleLoc = () => {
    const loc = locRef.current.value;
    // dispatch({
    //   type: "LOC_C",
    //   data: loc
    // });
    store.dispatch({
      type: "LOC_C",
      data: loc
    });
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>Loc</button>
    </div>
  );
};
const mdp = (d) => {
  return {
    dispatch: d
  };
};

export default connect(null, mdp)(B);
