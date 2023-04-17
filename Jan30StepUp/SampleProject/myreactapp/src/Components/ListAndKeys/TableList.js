import React from "react";

export const TableList = () => {
  const headers = ["Name", "Runs"];
  const data = [
    {name: "Sachin", runs: 10},
    {name: "Dhoni", runs: 30}
  ];
  return (
    <div>
      <table border="1px solid">
        <thead>
          <tr>
            <th>Name</th>
            <th>Runs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sachin</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Dhoni</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
