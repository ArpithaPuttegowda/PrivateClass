import React, {Component} from "react";

class PlayerC extends Component {
  render() {
    return (
      <div>
        I'm {this.props.name?.length},I'm from {this.props.loc}
      </div>
    );
  }
}

export default PlayerC;
