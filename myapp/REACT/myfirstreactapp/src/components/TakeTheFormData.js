import React, {Component} from "react";

export default class TakeTheFormData extends Component {
  constructor() {
    super();
    this.dataObj = {};
  }
  handleSubmit = (event) => {
    console.log(this.dataObj);
  };
  handleChange = (e) => {
    let key = e.target.id;
    let val = e.target.value;
    this.dataObj = {...this.dataObj, [key]: val};
  };
  render() {
    return (
      <div>
        <h1>Registration Page</h1>
        <p>
          <b>Name:</b>
          <input id="name" onChange={this.handleChange} />
        </p>
        <p>
          <b>Password:</b>
          <input id="password" onChange={this.handleChange} />
        </p>
        <p>
          <b>Email:</b>
          <input id="email" onChange={this.handleChange} />
        </p>
        <p>
          <button onClick={this.handleSubmit}>Submit</button>
        </p>
      </div>
    );
  }
}
