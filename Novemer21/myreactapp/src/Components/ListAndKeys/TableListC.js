import React, {Component} from "react";

class TableListC extends Component {
  constructor() {
    super();
    this.headerData = ["N", "Loc", "Runs", "Pincode"];
    this.playersData = [
      {name: "sachin", loc: "mumbai", runs: "12", pincode: "123"},
      {name: "dhoni", loc: "ranchi", runs: "12", pincode: "234"},
      {
        name: "Kohli",
        loc: "delhi",
        runs: "12",
        pincode: "23"
      }
    ];
    this.playerKeys = ["name", "loc", "runs", "pincode"];
  }
  render() {
    return (
      <div>
        <table border="1px solid">
          <thead>
            <tr>
              {this.headerData.map((header, i) => {
                return <th key={i}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {/* {playersData.map((obj, i) => {
            return (
              <tr>
                <td>{obj.name}</td>
                <td>{obj.loc}</td>
                <td>{obj.runs}</td>
                <td>{obj.pincode}</td>
              </tr>
            );
          })} */}
            {this.playersData.map((obj, i) => {
              return (
                <tr key={i}>
                  {this.playerKeys.map((k, i) => {
                    return <td key={i}>{obj[k]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableListC;
