import React, {Component} from "react";

class LifeCycleMethodsUnmounting extends Component {
  state = {
    isChild: true
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({isChild: !this.state.isChild})}>
          Toggle
        </button>
        {this.state.isChild && <Child />}
      </div>
    );
  }
}

export default LifeCycleMethodsUnmounting;

class Child extends Component {
  componentWillUnmount() {
    alert("Unmounted");
    clearInterval(this.id);
  }
  render() {
    return <div>I'm Child</div>;
  }

  componentDidMount() {
    this.id = setInterval(() => {
      console.log("child");
    }, 2000);
    console.log(this.id);
  }
}
