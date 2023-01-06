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
      const myState = store.getState();
      this.setState({
        name: myState?.nameLocC?.nameC,
        loc: myState?.nameLocC?.locC
      });
    });
  }

  render() {
    alert("render called");
    return (
      <div>
        <h1>Name:{this.state.name}</h1>
        <h1>Loc:{this.state.loc}</h1>
      </div>
    );
  }
}

export default CC;
