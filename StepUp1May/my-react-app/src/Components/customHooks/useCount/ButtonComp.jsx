import { useCount } from "./useCount"

export const ButtonComp = () => {
  const {count,handleInc}=useCount(10)
  return (
    <div>
      <button onClick={handleInc}>Inc Count {count}</button>
    </div>
  )
}
