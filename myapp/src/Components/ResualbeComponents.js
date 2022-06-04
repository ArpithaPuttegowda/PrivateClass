import React, {Component} from "react";

export default class ResualbeComponents extends Component {
  render() {
    return (
      <div>
        <select>
          {this.props.data?.map((v, i) => {
            return <option>{v}</option>;
          })}
        </select>
      </div>
    );
  }
}
