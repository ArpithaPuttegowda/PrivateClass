import React from "react";

export const TableListkeys = () => {
  const headers = ["Name", "Loc", "runs"];
  const data = [
    {name: "Sachin", loc: "Mumbai", runs: 10},
    {name: "Dhoni", loc: "Ranchi", runs: 20},
    {name: "Kohli", loc: "Delhi", runs: 20}
  ];
  return (
    <div>
      <table border="1px solid">
        <thead>
          <tr>
            {headers.map((header, i) => {
              return <th key={i + header}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => {
            return (
              <tr key={i + obj.name}>
                <td>{obj.name}</td>
                <td>{obj.loc}</td>
                <td>{obj.runs}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
