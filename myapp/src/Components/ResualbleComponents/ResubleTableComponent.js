import React, {Component} from "react";

export default class ResubleTableComponent extends Component {
  render() {
    return (
      <div>
        {
          <table border="1px solid">
            <thead>
              {this.props.headers?.map((v, i) => {
                return <th>{v}</th>;
              })}
            </thead>
            <tbody>
              {this.props.data?.map((obj, i) => {
                return (
                  <tr>
                    {this.props.keys?.map((key, i) => {
                      return <td>{obj[key]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
    );
  }
}
