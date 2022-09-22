import React, {Component} from "react";

export default class Hero extends Component {
  render() {
    console.log(this, "current object");
    if (this.props.hero === "joker") {
      throw new Error("Joker is not a hero");
    }

    return (
      <div>
        {this.props.hero}....{this.props.children}
      </div>
    );
  }
}
