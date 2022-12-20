import React, {Component} from "react";

class BoxC extends Component {
  render() {
    console.log(this, "current object");
    const {n, loc, name} = this.props;
    return (
      <div id="box">
        {n}...{loc}....{name}
      </div>
    );
  }
}

export default BoxC;
