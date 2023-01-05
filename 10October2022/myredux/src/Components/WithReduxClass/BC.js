import React, {Component, createRef} from "react";
import store from "../../store/store";

class BC extends Component {
  constructor() {
    super();
    this.locRef = createRef(null);
  }
  handleLoc = () => {
    const loc = this.locRef.current.value;
    store.dispatch({
      type: "LOC_C",
      payload: loc
    });
  };
  render() {
    return (
      <div>
        <input ref={this.locRef} />
        <button onClick={this.handleLoc}>Loc</button>
      </div>
    );
  }
}

export default BC;
