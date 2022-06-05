import React, {Component} from "react";

export default class ErrorBoundary extends Component {
  state = {
    isError: false
  };
  static getDerivedStateFromError() {
    return {
      isError: true
    };
  }
  componentDidCatch(e) {
    console.log(e, "to catch the proper error message");
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
