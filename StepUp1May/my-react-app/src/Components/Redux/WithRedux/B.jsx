import { useRef } from "react"

export const B = () => {
  const locRef=useRef(null)
  const handleLoc=()=>{
    const loc=locRef?.current?.value
  }
  return (
    <div>
        <input/>
        <button onClick={handleLoc}>Loc</button>
    </div>
  )
}
