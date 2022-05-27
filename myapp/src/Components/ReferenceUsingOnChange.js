import React, {Component} from "react";

export default class ReferenceUsingOnChange extends Component {
  constructor() {
    super();
    this.data = {};
  }
  handleRegister = () => {
    console.log(this.data, "my final data");
  };
  handleChange = (event) => {
    let id = event.target.id;
    let val = event.target.value;
    this.data = {...this.data, [id]: val};
  };
  render() {
    return (
      <div>
        <p>
          <b>Name</b>
          <input onChange={this.handleChange} id="name" />
        </p>
        <p>
          <b>Loc</b>
          <input onChange={this.handleChange} id="loc" />
        </p>
        <p>
          <b>Phone</b>
          <input onChange={this.handleChange} id="phone" />
        </p>
        <p>
          <b>Email</b>
          <input onChange={this.handleChange} id="email" />
        </p>
        <p>
          <b>Address</b>
          <input onChange={this.handleChange} id="address" />
        </p>
        <p>
          <button onClick={this.handleRegister}>Register</button>
        </p>
      </div>
    );
  }
}
