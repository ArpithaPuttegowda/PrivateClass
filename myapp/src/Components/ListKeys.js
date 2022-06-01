import React, {Component} from "react";

export default class ListKeys extends Component {
  render() {
    const data = ["WASEEM", "Sachin", "Kohli", "Dhoni", "Panth"];
    return (
      <div>
        {data.map((v, i) => {
          return <p key={v + i}>{v}</p>;
        })}
      </div>
    );
  }
}
