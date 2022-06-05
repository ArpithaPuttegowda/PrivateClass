import React, {Component} from "react";

export default class ResualbeListComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data?.map((v, i) => {
            return <li>{v}</li>;
          })}
        </ul>
      </div>
    );
  }
}
