import { useReducer } from "react"
const reducer=(state,action)=>{
    switch(action.type){
        case "CHANGE_NAME":
            return {...state,name:action.payload}
        default:
            return state
    }
}
const initialState={
    name:"Sachin"
}

export const ChangeName = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const handleChangeName=()=>{
        dispatch({
            type:"CHANGE_NAME",
            payload:"MD"
        })
    }
  return (
    <div>
        <button onClick={handleChangeName}>Change Name...{state.name}</button>
    </div>
  )
}
