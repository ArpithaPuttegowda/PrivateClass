import { useDispatch, useSelector } from "react-redux"
import { getCount, setDec, setInc, setReset } from "./counterSlice"

export const Counter = () => {
    const dispatch=useDispatch()
    const count=useSelector(getCount)
  return (
    <div>
        <button onClick={()=>dispatch(setInc(10))}>Inc</button>
        <button onClick={()=>dispatch(setDec(2))}>Dec</button>
        <button onClick={()=>dispatch(setReset(0))}>Reset</button>

        <h1>Counter:::{count}</h1>
    </div>
  )
}
