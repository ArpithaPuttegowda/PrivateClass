import React, {Component} from "react";

class DropDownReusuable extends Component {
  render() {
    console.log(this, "current object");
    const {data, label} = this.props;
    return (
      <div>
        {data ? (
          <>
            <span>{label}</span>
            <select>
              {data.map((d, i) => {
                return <option key={i}>{d}</option>;
              })}
            </select>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export {DropDownReusuable};
