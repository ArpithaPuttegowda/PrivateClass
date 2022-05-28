import React, {Component, createContext} from "react";

const ctx = createContext();

export default class Context extends Component {
  constructor() {
    super();
    this.data = "Sachin";
  }
  render() {
    return (
      <div>
        Context::::
        <ctx.Provider value={this.data}>
          <A />
        </ctx.Provider>
      </div>
    );
  }
}

class A extends Component {
  render() {
    return (
      <div>
        <B />
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        I'm B component::: {this.context}
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
        I'm C component....
        <ctx.Consumer>{(d) => d}</ctx.Consumer>
        <D />
      </div>
    );
  }
}

class D extends Component {
  render() {
    return (
      <div>
        I'm D Component:::::<ctx.Consumer>{(d) => d}</ctx.Consumer>
      </div>
    );
  }
}
