import React, {Component} from "react";
import store from "../../store/store";

class CC extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      loc: ""
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      let state = store.getState();
      this.setState({
        name: state.nameLocC.nameC,
        loc: state.nameLocC.locC
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <h1>Loc:{this.state.loc}</h1>
      </div>
    );
  }
}

export default CC;
