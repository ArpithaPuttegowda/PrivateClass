import React, {Component, createRef} from "react";
import store from "../../store/store";

class AC extends Component {
  constructor() {
    super();
    this.nameRef = createRef(null);
  }
  handleName = () => {
    let name = this.nameRef.current.value;
    store.dispatch({
      type: "NAME_C",
      payload: name
    });
  };
  render() {
    return (
      <div>
        <input ref={this.nameRef} />
        <button onClick={this.handleName}>Name</button>
      </div>
    );
  }
}

export default AC;
