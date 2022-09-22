import React, {Component} from "react";

export default class ErrorBoundaryGeneric extends Component {
  state = {
    isError: false
  };
  static getDerivedStateFromError() {
    alert("Exception occured");
    return {
      isError: true
    };
  }
  componentDidCatch(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        {this.state.isError ? (
          <h1>Something went wrong</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
