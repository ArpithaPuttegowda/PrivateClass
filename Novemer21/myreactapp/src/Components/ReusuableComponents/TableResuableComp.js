import React from "react";

export const TableResuableComp = ({headers, data, tableKeys}) => {
  return (
    <p>
      <table border="1px solid">
        <thead>
          {headers?.map((h, i) => {
            return <th key={i}>{h}</th>;
          })}
        </thead>
        <tbody>
          {data?.map((obj, ind) => {
            return (
              <tr key={ind}>
                {tableKeys?.map((k, i) => {
                  return <td key={i}>{obj[k]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </p>
  );
};
