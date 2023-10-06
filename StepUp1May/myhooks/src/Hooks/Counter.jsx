import { useReducer } from "react"

const reducer=(state,action="COUNT")=>{
    if(action==="COUNT"){
        state={...state,count:state.count+1}
    }
return state
}
const initialState={
    count:0,
    name:""
}


export const Counter = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
    const handleInc=()=>{
        dispatch("COUNT")
    }
  return (
    <div>
        <button onClick={handleInc}>Inc...{state.count}</button>
    </div>
  )
}
