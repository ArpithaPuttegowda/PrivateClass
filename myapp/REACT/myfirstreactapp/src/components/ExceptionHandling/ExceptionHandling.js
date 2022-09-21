import React, {Component} from "react";
import Hero from "./Hero";

export default class ExceptionHandling extends Component {
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
          "Something went wrong "
        ) : (
          <>
            <Hero hero="Sharuk" />
            <Hero hero="Prabhas" />
            <Hero hero="joker" />
          </>
        )}
      </div>
    );
  }
}
