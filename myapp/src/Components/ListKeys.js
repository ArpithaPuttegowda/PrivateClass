import React, {Component} from "react";

// export default class ListKeys extends Component {
//   render() {
//     const data = ["WASEEM", "Sachin", "Kohli", "Dhoni", "Panth"];
//     return (
//       <div>
//         {data.map((v, i) => {
//           return <p key={v + i}>{v}</p>;
//         })}
//       </div>
//     );
//   }
// }
// export default class ListKeys extends Component {
//   render() {
//     const data = ["WASEEM", "Sachin", "Kohli", "Dhoni", "Panth", "Dravid"];
//     return (
//       <div>
//         <ul>
//           {data.map((v, i) => {
//             return <li key={v + i}>{v}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default class ListKeys extends Component {
//   render() {
//     const data = ["WASEEM", "Sachin", "Kohli", "Dhoni", "Panth", "Dravid"];
//     return (
//       <div>
//         <select>
//           {data.map((v, i) => {
//             return <option key={v + i}>{v}</option>;
//           })}
//         </select>
//       </div>
//     );
//   }
// }

export default class ListKeys extends Component {
  render() {
    const headers = ["Name", "Loc", "Runs", "FN"];
    const data = [
      {name: "Sachin", loc: "Mumbai", runs: "10", fn: "ST"},
      {name: "Dhoni", loc: "Ranchi", runs: "20", fn: "MD"},
      {name: "Panth", loc: "Delhi", runs: "30", fn: "PP"},
      {name: "Kohli", loc: "Delhi", runs: "1", fn: "KK"}
    ];
    return (
      <div>
        <table border="1px solid">
          <thead>
            {headers.map((v, i) => {
              return <th key={v + i}>{v}</th>;
            })}
          </thead>
          <tbody>
            {data.map((obj, i) => {
              return (
                <tr>
                  <td>{obj.name}</td>
                  <td>{obj.loc}</td>
                  <td>{obj.runs}</td>
                  <td>{obj.fn}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
