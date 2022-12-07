import {Component} from "react";

export const myHoc = (MyComponent) => {
  class Logic extends Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    handleInc = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return <MyComponent />;
    }
  }
  return Logic;
};
