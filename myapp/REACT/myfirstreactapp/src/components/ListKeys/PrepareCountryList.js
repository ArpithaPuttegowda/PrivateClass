import React, {Component} from "react";

export default class PrepareCountryList extends Component {
  constructor() {
    super();
    this.data = ["India", "Pakistan", "US", "UK", "JAPAN"];
  }
  render() {
    return (
      <>
        <select>
          {this.data.map((country, index) => {
            return <option key={country + index}>{country}</option>;
          })}
        </select>
      </>
    );
  }
}
