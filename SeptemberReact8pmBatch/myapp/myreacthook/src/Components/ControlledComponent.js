import React from "react";

export const TableComp = ({header, data, keys}) => {
  return (
    <p>
      {
        <table border="1px solid">
          <thead>
            <tr>
              {header?.map((h, i) => {
                return <th key={i}>{h}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data?.map((obj, i) => {
              return (
                <tr key={i}>
                  {keys.map((k, i) => {
                    return <td>{obj[k]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </p>
  );
};
