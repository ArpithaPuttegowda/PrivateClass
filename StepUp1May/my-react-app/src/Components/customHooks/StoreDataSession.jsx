import { useState } from "react";

export const StoreDataBrowser = () => {
    const [val,setVal]=useState("")
    const setData = (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
      };
      const getData = (key) => {
        const item = sessionStorage.getItem(key);
        setVal(item ? JSON.parse(item) : null)
        return item ? JSON.parse(item) : null
      };

      const removeData = (key) => {
        sessionStorage.removeItem(key);
      };
  return (
    <div>
        <button onClick={()=>setData("name","arpitha")}>Store data</button>
        <button onClick={()=>getData("name")}>Get Data</button>
        <button onClick={()=>removeData("name")}>Remove Data</button>
        <h1>Data from localStorage::{val} </h1>
    </div>
  )
}
