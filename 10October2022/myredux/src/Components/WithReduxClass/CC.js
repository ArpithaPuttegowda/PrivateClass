import React, {Component} from "react";
import store from "../../store/store";

class CC extends Component {
  constructor() {
    super();
    this.myState = store.getState();
  }
  componentDidMount() {
    store.subscribe(() => {
      this.myState = store.getState();
    });
  }

  render() {
    return (
      <div>
        <h1>Name:{this.myState?.nameLocC?.nameC}</h1>
        <h1>Loc:{this.myState?.nameLocC?.locC}</h1>
      </div>
    );
  }
}

export default CC;
