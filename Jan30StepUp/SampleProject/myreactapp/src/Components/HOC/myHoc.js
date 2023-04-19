import {Component} from "react";

export const myHoc = (Comp) => {
  class Logic extends Component {
    state = {
      count: 0
    };
    handleCount = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return <Comp count={this.state.count} handleCount={this.handleCount} />;
    }
  }
  return Logic;
};
