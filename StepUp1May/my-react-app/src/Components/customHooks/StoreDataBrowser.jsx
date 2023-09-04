import useStorage from "./useBrowserStorage";

export const StoreDataBrowser = () => {
   const { setItem, getItem, removeItem,val }=useStorage("local")
  return (
    <div>
        <button onClick={()=>setItem("name","arpitha")}>Store data</button>
        <button onClick={()=>getItem("name")}>Get Data</button>
        <button onClick={()=>removeItem("name")}>Remove Data</button>
        <h1>Value:::{val}</h1>
    </div>
  )
}
