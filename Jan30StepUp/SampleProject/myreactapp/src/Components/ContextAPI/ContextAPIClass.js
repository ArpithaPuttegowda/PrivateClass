import React, {Component} from "react";
import {ctx} from "./ctx";

class ContextAPIClass extends Component {
  render() {
    const data = "INDIA";
    return (
      <div>
        <ctx.Provider value={data}>
          <A />
        </ctx.Provider>
      </div>
    );
  }
}

export default ContextAPIClass;

class A extends Component {
  render() {
    return (
      <div>
        I'm A:
        <B />
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        I'm B:{this.context}
        <C />
      </div>
    );
  }
}
B.contextType = ctx;

class C extends Component {
  render() {
    return (
      <div>
        I'm C::::<ctx.Consumer>{(d) => d}</ctx.Consumer>
        <D />
      </div>
    );
  }
}

class D extends Component {
  render() {
    return (
      <div>
        I'm D:<ctx.Consumer>{(d) => d}</ctx.Consumer>
      </div>
    );
  }
}
