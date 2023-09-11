import { useRef } from "react"

export const A = ({nameFn}) => {
    const nameRef=useRef(null)
    const handleName=()=>{
        const name=nameRef?.current?.value;
       nameFn(name)
       nameRef.current.value=""
    }
  return (
    <div>
        <input ref={nameRef} />
        <button onClick={handleName}>Name</button>
    </div>
  )
}
