import { useRef } from "react"

const Parent=()=>{
  const myInputRef=useRef(null)
  const handleClick=()=>{
    myInputRef.current.value="Sachin"
  }
  return <div><Child data={myInputRef}/>
  <button onClick={handleClick}>Click me to set the data</button>
  </div>
}

export default Parent

// eslint-disable-next-line react/prop-types
const Child=({data})=>{
  return <div>
  <input ref={data}/>
  </div>
}