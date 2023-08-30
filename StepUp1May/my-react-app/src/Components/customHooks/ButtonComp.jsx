import { useCount } from "./useCount"

export const ButtonComp = () => {
  const {count,handleInc}=useCount()
  return (
    <div>
      <button onClick={handleInc}>Inc Count {count}</button>
    </div>
  )
}
