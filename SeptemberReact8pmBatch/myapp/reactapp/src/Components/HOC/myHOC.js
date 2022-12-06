import {Component} from "react";

export const myHoc = (Comp) => {
  class Logic extends Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    incCount = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return (
        <div>
          <Comp c={this.state.count} f={this.incCount} />
        </div>
      );
    }
  }
  return Logic;
};
