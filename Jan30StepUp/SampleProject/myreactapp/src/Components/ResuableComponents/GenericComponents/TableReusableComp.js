import React from "react";

export const TableReusableComp = ({headers, data, keys}) => {
  return (
    <p>
      <table border={"1px solid"}>
        <thead>
          {headers?.map((h, i) => {
            return <th key={h + i}>{h}</th>;
          })}
        </thead>
        <tbody>
          {data?.map((obj, i) => {
            return (
              <tr key={obj.name + i}>
                {keys?.map((k, i) => {
                  return <td key={k + i}>{obj[k]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </p>
  );
};
