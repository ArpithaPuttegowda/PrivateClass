import React, {Component} from "react";

export default class ReferenceAsCallback extends Component {
  constructor() {
    //getting the reference using callback approach
    super();
    this.textInput1 = null;
    this.textInput2 = null;
    this.setTextInputRef1 = (element) => {
      this.textInput1 = element;
    };
    this.setTextInputRef2 = (element) => {
      this.textInput2 = element;
    };
  }
  handleClick = () => {
    let n1 = this.textInput1.value;
    let n2 = this.textInput2.value;
    console.log(n1, n2, "value");
  };
  render() {
    return (
      <div>
        <p>
          N1:
          <input ref={this.setTextInputRef1} />
        </p>
        <p>
          N2:
          <input ref={this.setTextInputRef2} />
        </p>
        <p>
          <button onClick={this.handleClick}>Click me</button>
        </p>
      </div>
    );
  }
}
