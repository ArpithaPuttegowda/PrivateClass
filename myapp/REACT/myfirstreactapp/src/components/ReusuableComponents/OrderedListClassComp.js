import React, {Component} from "react";

export default class OrderedListClassComp extends Component {
  render() {
    return (
      <div>
        <ol>
          ordered list
          {this.props.data?.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
}
