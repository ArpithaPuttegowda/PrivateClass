import React, {Component} from "react";

class ErrorBoundaryReusableComponent extends Component {
  state = {
    isError: false
  };
  static getDerivedStateFromError() {
    return {
      isError: true
    };
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

export default ErrorBoundaryReusableComponent;
