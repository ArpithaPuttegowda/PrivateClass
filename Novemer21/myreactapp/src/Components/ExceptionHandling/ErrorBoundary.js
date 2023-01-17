import React, {Component} from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
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

export default ErrorBoundary;
