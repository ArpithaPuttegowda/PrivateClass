import React, {Component, createRef} from "react";

class LifeCycleUnMounting2 extends Component {
  constructor() {
    super();
    this.buttonRef = createRef(null);
    this.myRef = createRef(null);
  }
  render() {
    return (
      <div>
        <input ref={this.myRef} />
        <button ref={this.buttonRef}>Click</button>
      </div>
    );
  }
  focusInput = () => () => {
    this.myRef.current?.focus();
    this.myRef.current.value = "PUNE";
  };
  componentDidMount() {
    this.buttonRef.current.addEventListener("click", this.focusInput);
  }
  componentWillUnmount() {
    this.buttonRef.current.removeEventListener("click", this.focusInput);
  }
}

export default LifeCycleUnMounting2;
