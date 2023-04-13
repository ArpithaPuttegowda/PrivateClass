import React, {Component} from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
  static getDerivedStateFromError() {
    alert("componentdidCatch called");
    return {
      isError: true
    };
  }
  componentDidCatch(e) {
    console.log(e, "myError message");
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
