import './App.css'
import { ChangeName } from './Hooks/ChangeName'
import { Counter } from './Hooks/Counter'
import { Counter5 } from './Hooks/Counter5'
import { Form } from './Hooks/Form'
import { ParentNL } from './Hooks/GlobalStateWithuseReducerContextAPI/ParentNL'
import {ctx} from "./ctx"
import { useReducer } from 'react'
import ExampleComponent from './Hooks/ExampleuseLayoutEffect'
import { ExampleUseTransition } from './Hooks/ExampleUseTransition'
import { Debouncing } from './Javascript/Debouncing'

const initData={
name:"",
loc:""
}

const reducer=(state,action)=>{
  if(action.type==="NAME"){
    state={...state,name:action.payload}
  }
  if(action.type==="LOC"){
    state={...state,loc:action.payload}
  }
  return state
  }
function App() {
const [state,dispatch]=useReducer(reducer,initData)
  return <>
  <ctx.Provider value={{state,dispatch}}>
  {/* <Counter5/>
  <Form/>
  <ChangeName/>
  <ParentNL/> */}
  {/* <ExampleComponent/> */}
  {/* <ExampleComponent/> */}
  {/* <ExampleUseTransition/> */}
  <Debouncing/>
  </ctx.Provider></>
}

export default App
