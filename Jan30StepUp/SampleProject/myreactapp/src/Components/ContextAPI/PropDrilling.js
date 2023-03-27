import React, {Component} from "react";

class PropDrilling extends Component {
  render() {
    const data = "INDIA";
    return (
      <div>
        I'm Parent:
        <A d={data} />
      </div>
    );
  }
}

export default PropDrilling;

class A extends Component {
  render() {
    return (
      <div>
        I'm A:
        <B myData={this.props.d} />
      </div>
    );
  }
}
class B extends Component {
  render() {
    return (
      <div>
        I'm B:
        <C data={this.props.myData} />
      </div>
    );
  }
}
class C extends Component {
  render() {
    return (
      <div>
        I'm C:
        <D d={this.props.data} />
      </div>
    );
  }
}
class D extends Component {
  render() {
    return <div>I'm D:{this.props.d}</div>;
  }
}
