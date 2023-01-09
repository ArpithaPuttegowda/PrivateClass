import React, {useRef} from "react";
import {connect} from "react-redux";
import store from "../../store/store";

const A = ({dis}) => {
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef.current.value;
    // store.dispatch({
    //   type: "NAME_F",
    //   data: name
    // });
    dis({
      type: "NAME_F",
      data: name
    });
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>Name</button>
    </div>
  );
};

const mdp = (d) => {
  return {
    dis: d
  };
};

export default connect(null, mdp)(A);

//component=>reducer=>redux
