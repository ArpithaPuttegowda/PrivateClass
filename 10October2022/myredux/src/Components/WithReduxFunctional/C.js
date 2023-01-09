import React, {useState} from "react";
import {connect} from "react-redux";
import store from "../../store/store";

// const C = () => {
//   const [name, setName] = useState("");
//   const [loc, setLoc] = useState("");
//   store.subscribe(() => {
//     let myState = store.getState();
//     setName(myState?.nameLocC?.nameF);
//     setLoc(myState?.nameLocC?.locF);
//   });
//   return (
//     <div>
//       <h1>Name:{name}</h1>
//       <h1>Loc:{loc}</h1>
//     </div>
//   );
// };
const C = ({name, loc}) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Loc:{loc}</h1>
    </div>
  );
};
const msp = (myState) => {
  return {
    name: myState?.nameLocC?.nameF,
    loc: myState?.nameLocC?.locF
  };
};
export default connect(msp)(C);
