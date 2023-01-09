import React, {Component} from "react";
import {connect} from "react-redux";
import store from "../../store/store";

// class CC extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       loc: ""
//     };
//   }
//   componentDidMount() {
//     store.subscribe(() => {
//       const myState = store.getState();
//       this.setState({
//         name: myState?.nameLocC?.nameC,
//         loc: myState?.nameLocC?.locC
//       });
//     });
//   }

//   render() {
//     alert("render called");
//     return (
//       <div>
//         <h1>Name:{this.state.name}</h1>
//         <h1>Loc:{this.state.loc}</h1>
//       </div>
//     );
//   }
// }
class CC extends Component {
  render() {
    return (
      <div>
        <h1>Name:{this.props?.n}</h1>
        <h1>Loc:{this.props?.l}</h1>
      </div>
    );
  }
}
const msp = (s) => {
  return {
    n: s?.nameLocC?.nameC,
    l: s?.nameLocC?.locC
  };
};

export default connect(msp)(CC);
