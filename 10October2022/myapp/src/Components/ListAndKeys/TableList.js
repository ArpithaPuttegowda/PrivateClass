import React from "react";

export const TableList = () => {
  const headers = ["Name", "Loc", "Runs"];
  const data = [
    {name: "sachin", loc: "mumbai", runs: 20},
    {name: "Dhoni", loc: "Ranchi", runs: 20},
    {name: "kohli", loc: "delhi", runs: 30},
    {name: "dravid", loc: "bangalore", runs: 40}
  ];
  return (
    <div>
      <table border="1px solid">
        <thead>
          {headers.map((header, i) => {
            return <th>{header}</th>;
          })}
        </thead>
        <tbody>
          {data.map((obj, i) => {
            const {name, loc, runs} = obj;
            return (
              <tr>
                <td>{name}</td>
                <td>{loc}</td>
                <td>{runs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
