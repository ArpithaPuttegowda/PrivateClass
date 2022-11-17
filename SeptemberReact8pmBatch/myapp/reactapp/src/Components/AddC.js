import React, {Component, createRef} from "react";

export default class Add extends Component {
  constructor() {
    super();
    this.no1ref = createRef(null);
    this.no2ref = createRef(null);
    this.state = {
      result: 0
    };
  }
  handleAdd = () => {
    let no1 = this.no1ref.current.value;
    let no2 = this.no2ref.current.value;
    let sum = Number(no1) + Number(no2);
    this.setState({
      result: sum
    });
  };
  render() {
    return (
      <div>
        <p>
          <b>No1:</b>
          <input ref={this.no1ref}></input>
        </p>
        <p>
          <b>No2:</b>
          <input ref={this.no2ref}></input>
        </p>
        <p>
          <button onClick={this.handleAdd}>Add</button>
        </p>
        <h1 style={{color: this.state.result > 100 ? "red" : "blue"}}>
          {this.state.result}
        </h1>
        <h2 className={this.state.result > 100 ? "cr" : "cg"}>
          {this.state.result}
        </h2>
      </div>
    );
  }
}
