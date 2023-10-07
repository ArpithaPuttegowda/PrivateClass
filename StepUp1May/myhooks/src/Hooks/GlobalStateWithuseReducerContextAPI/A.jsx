import { useContext } from "react"
import { useRef } from "react"
import { ctx } from "../../ctx"

export const A = () => {
    const data=useContext(ctx)
    const nameRef=useRef(null)
    const handleName=()=>{
        const name=nameRef?.current?.value;
        data.dispatch({
          type:"NAME",
          payload:name
        })
    }
  return (
    <div>
        <input ref={nameRef}/>
        <button onClick={handleName}>Name</button>
    </div>
  )
}
