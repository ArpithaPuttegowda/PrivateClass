import { useCount } from "./useCount"

export const HoverComp = () => {
   const {count,handleInc}=useCount()
  return (
    <h1 onMouseOver={handleInc}>Hover me to inc count {count}</h1>
  )
}
