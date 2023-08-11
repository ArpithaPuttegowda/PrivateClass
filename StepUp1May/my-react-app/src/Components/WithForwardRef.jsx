import { forwardRef } from "react"
import { useRef } from "react"

const Parent=()=>{
  const myInputRef=useRef(null)
  const handleClick=()=>{
    myInputRef.current.value="Sachin"
  }
  return <div><Child ref={myInputRef} name="Mumbai" loc="hyd"/>
  <button onClick={handleClick}>Click me to set the data</button>
  </div>
}

export default Parent

// eslint-disable-next-line react/prop-types, react/display-name
const Child=forwardRef(({name,loc},r)=>{
  return <div>
    <h1>{name}...{loc}</h1>
  <input ref={r}/>
  </div>
})