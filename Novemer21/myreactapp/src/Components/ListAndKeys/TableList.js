import React from "react";

export const TableList = () => {
  const headerData = ["Name", "Loc", "Runs", "Pincode"];
  const playersData = [
    {name: "sachin", loc: "mumbai", runs: "12", pincode: "123"},
    {name: "dhoni", loc: "ranchi", runs: "12", pincode: "234"},
    {
      name: "Kohli",
      loc: "delhi",
      runs: "12",
      pincode: "23"
    }
  ];
  const playerKeys = ["name", "loc", "runs", "pincode"];
  return (
    <div>
      <table border="1px solid">
        <thead>
          <tr>
            {headerData.map((header, i) => {
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
          {playersData.map((obj, i) => {
            return (
              <tr key={i}>
                {playerKeys.map((k, i) => {
                  return <td key={i}>{obj[k]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
