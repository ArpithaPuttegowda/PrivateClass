import React, {Component} from "react";

class Parent extends Component {
  state = {
    name: "",
    loc: ""
  };
  //callbacks
  getDataFromChild = (myData, loc) => {
    console.log(myData, loc);
    this.setState({
      name: myData,
      loc
    });
  };
  render() {
    const {name, loc} = this.state;
    return (
      <div>
        <h1>
          I'm Parent:::{name}...{loc}
        </h1>
        <Child getData={this.getDataFromChild} />
      </div>
    );
  }
}

export default Parent;

class Child extends Component {
  constructor() {
    super();
    this.data = "INDIA";
  }
  handlePassData = () => {
    this.props.getData(this.data, "hyderabad");
  };
  render() {
    console.log(this, "current object");
    return (
      <div>
        <button onClick={this.handlePassData}>Pass Data when I click </button>
      </div>
    );
  }
}
