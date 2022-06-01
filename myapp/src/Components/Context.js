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
          <A>Arpitha</A>
        </ctx.Provider>
      </div>
    );
  }
}

class A extends Component {
  render() {
    return (
      <div>
        This is the data coming from A ::::::{this.props.children}
        <B name="Sachin" myData={this.props.children}>
          WASEEM
        </B>
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log(this, "B");
    return (
      <div>
        I'm B component:::{this.props.name} {this.context}
        THIS IS CHILD CONTENT....{this.props.children}
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
