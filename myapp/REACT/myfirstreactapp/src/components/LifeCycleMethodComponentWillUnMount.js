import React, {Component} from "react";

export default class LifeCycleMethodComponentWillUnMount extends Component {
  constructor() {
    super();
    this.state = {
      isChild: true
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({isChild: !this.state.isChild})}>
          Show Child
        </button>
        {this.state.isChild && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("I'm unmounting from the dom");
    clearInterval(this.id);
  }
  render() {
    return <h1>I'm Child...</h1>;
  }
  componentDidMount() {
    this.id = setInterval(() => {
      console.log("setInterval");
    }, 5000);
  }
}
