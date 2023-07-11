import React from "react";

export const TableComp = () => {
  const headers = ["Name", "Loc", "Runs"];
  const data = [
    { name: "Sachin", loc: "Mumbai", runs: "10" },
    { name: "Dhoni", loc: "Ranchi", runs: "10" },
    { name: "Kohli", loc: "Delhi", runs: "10" },
    { name: "Panth", loc: "UP", runs: "10" },
  ];
  return (
    <table border="1px solid">
      <thead>
        <tr>
          {headers?.map((header, i) => {
            return <th>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((obj, i) => {
          return (
            <tr>
              <td>{obj.name}</td>
              <td>{obj.loc}</td>
              <td>{obj.runs}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
