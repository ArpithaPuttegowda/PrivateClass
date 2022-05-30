import React from "react";

const myHOC = (Component) => {
  class Logic extends React.Component {
    state = {
      count: 0
    };
    handleEvent = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return (
        <>
          <Component count={this.state.count} method={this.handleEvent} />
        </>
      );
    }
  }
  return Logic;
};
export default myHOC;
