import React, {Component, createRef} from "react";

class AddC extends Component {
  constructor() {
    super();
    //uncontrolled component
    this.n1Ref = createRef(null);
    this.n2Ref = createRef(null);
    this.state = {
      sum: 0
    };
  }
  handleSum = () => {
    debugger;
    // let n1 = document.getElementById("n1").value;
    // let n2 = document.getElementById("n2").value;
    const n1 = this.n1Ref.current.value;
    const n2 = this.n2Ref.current.value;
    const sum = Number(n1) + Number(n2);

    this.setState({
      sum
    });
  };
  render() {
    return (
      <div>
        <p>
          <b>N01:</b>
          <input type="number" ref={this.n1Ref} />
        </p>
        <p>
          <b>N02:</b>
          <input type="number" ref={this.n2Ref} />
        </p>
        <p>
          <button onClick={this.handleSum}>Sum</button>
        </p>
        <h1>{this.state.sum}</h1>
      </div>
    );
  }
}

export default AddC;
