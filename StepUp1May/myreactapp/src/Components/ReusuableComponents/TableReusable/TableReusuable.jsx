import React from 'react'

export const TableReusuable = ({headers,data,keys}) => {
  return (
    <p>
    <table border="1px solid">
        <thead>
            {
                headers?.map((v,i)=>{
                  return <th key={v+i}>{v}</th>
                })
            }
        </thead>
        <tbody>
            {
                data?.map((obj,i)=>{
               return <tr>
               {
                keys?.map((k,i)=>{
                  return <td key={k+i}>{obj[k]}</td>
                })
               }
               </tr>
                })
            }
        </tbody>
    </table>
    </p>
  )
}
