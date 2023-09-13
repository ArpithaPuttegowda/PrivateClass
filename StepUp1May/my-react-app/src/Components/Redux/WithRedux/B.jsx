import { useRef } from "react"
import { useDispatch } from "react-redux"

export const B = () => {
  const dispatch=useDispatch()
  const locRef=useRef(null)
  const handleLoc=()=>{
    const loc=locRef?.current?.value
    dispatch({
      type:"LOC",
      data:loc
    })
  }
  return (
    <div>
        <input ref={locRef}/>
        <button onClick={handleLoc}>Loc</button>
    </div>
  )
}
