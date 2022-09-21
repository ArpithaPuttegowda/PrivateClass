import React, {Component} from "react";

export default class Hero extends Component {
  render() {
    if (this.props.hero === "joker") {
      throw new Error("Joker is not a hero");
    }

    return <div>{this.props.hero}</div>;
  }
}
