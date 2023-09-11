import { useRef } from "react"

export const B = ({locFn}) => {
    const locRef=useRef(null)
    const handleLoc=()=>{
    const loc=locRef?.current?.value;
    locFn(loc)
    locRef.current.value=""
    }
  return (
    <div>
        <input ref={locRef}/>
        <button onClick={handleLoc}>Loc</button>
    </div>
  )
}