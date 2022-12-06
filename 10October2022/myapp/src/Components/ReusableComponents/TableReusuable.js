import React from "react";

export const TableReusuable = ({headers, data, keys}) => {
  return (
    <table border="1px solid">
      <thead>
        {headers?.map((h, i) => {
          return <th key={i}>{h}</th>;
        })}
      </thead>
      <tbody>
        {data?.map((obj, i) => {
          return (
            <tr key={i}>
              {keys?.map((k, i) => {
                return <td>{obj[k]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
