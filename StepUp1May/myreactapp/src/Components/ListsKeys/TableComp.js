import React from "react";

export const TableComp = () => {
  const headers = ["Name", "Loc", "Runs"];
  const data = [
    { name: "Sachin", loc: "Mumbai", runs: "10" },
    { name: "Dhoni", loc: "Ranchi", runs: "20" },
  ];
  const keys = ["name", "loc", "runs"];
  return (
    <table border="1px solid">
      <thead>
        <tr>
          {headers.map((header, i) => {
            return <th key={header + i}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((obj, i) => {
          return (
            <tr key={obj.name + i}>
              {keys.map((k) => {
                return <td>{obj[k]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
