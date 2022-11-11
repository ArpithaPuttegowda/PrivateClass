import React, {Component} from "react";
import {connect} from "react-redux";
import store from "../../Store/store";

class C extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      loc: ""
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.name = store.getState()?.nameLocRedClass?.name;
      this.loc = store.getState()?.nameLocRedClass?.loc;
      console.log(this.name, "name by default");
      this.setState({
        name: this.name,
        loc: this.loc
      });
    });
  }
  render() {
    return (
      <>
        <h1>Name:::{this.state?.name}</h1>
        <h1>Loc:::{this.state?.loc}</h1>
      </>
    );
  }
}
// const msp = (state) => {
//   return {
//     n: state.nameLocRedClass.name,
//     l: state.nameLocRedClass.loc
//   };
// };
// export default connect(msp)(C);

export default C;
