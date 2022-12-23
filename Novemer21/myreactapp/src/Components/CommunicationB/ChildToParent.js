import React, {Component} from "react";

class P extends Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }
  getData = (d) => {
    this.setState({
      data: d
    });
  };

  render() {
    return (
      <div>
        <h1>I'm Parent:::::{this.state.data}</h1>
        <C myData={this.getData} />
      </div>
    );
  }
}

export default P;

class C extends Component {
  constructor() {
    super();
    this.data = "Sachin";
  }
  handleClick = () => {
    this.props.myData(this.data);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Pass the Data</button>
      </div>
    );
  }
}
