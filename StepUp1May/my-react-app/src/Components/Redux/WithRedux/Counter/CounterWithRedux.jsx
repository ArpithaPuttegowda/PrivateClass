import { useDispatch, useSelector } from "react-redux"

export const CounterWithRedux = () => {
  const dispatch=useDispatch()
  const storeData=useSelector((state)=>state)
  return (
    <div><h1>CounterWithRedux...{storeData?.counter?.count}</h1>
    <button onClick={()=>dispatch({
      type:"INC"
    })} >Inc Count</button>
        <button onClick={()=>dispatch({
      type:"DEC"
    })}   >Dec Count</button>
        <button onClick={()=>dispatch({
      type:"RESET"
    })}  >Reset</button></div>
  )
}
