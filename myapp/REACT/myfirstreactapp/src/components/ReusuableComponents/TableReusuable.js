import React from "react";

export const TableReusuable = ({data, headers, keys}) => {
  return (
    <p>
      <table border="1px solid">
        <thead>
          {headers?.map((header) => {
            return <th>{header}</th>;
          })}
        </thead>
        <tbody>
          {data?.map((obj) => {
            return (
              <tr>
                {keys?.map((key) => {
                  return <td>{obj[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </p>
  );
};
