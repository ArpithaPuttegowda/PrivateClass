import React, {Component} from "react";

class LifeCycleMethodArg extends Component {
  constructor({data, loc}) {
    super();
    this.state = {
      count: 0,
      name: "sachin"
    };
    console.log(data, loc, "constructor");
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextState.count === 3) {
      return {
        name: "Dhoni"
      };
    }
  }
  handleInc = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render(a, b, c) {
    // console.log(this.props, "render");
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count</button>
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
  componentDidMount(a, b, c) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((er) => {
        console.log(er);
      });
  }
}

export default LifeCycleMethodArg;
