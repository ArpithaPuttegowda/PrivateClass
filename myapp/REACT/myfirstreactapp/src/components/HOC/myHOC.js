import React from "react";

export const myHOC = (Comp) => {
  class Logic extends React.Component {
    state = {
      count: 0
    };
    handleInc = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return (
        <div>
          <Comp count={this.state.count} fn={this.handleInc} />
        </div>
      );
    }
  }
  return Logic;
};
