import React from "react"
import { Menu } from "./Menu"
import { AjaxComments } from "./Middlewares/comments"

const App=()=>{
  return <h1>Home....
    <AjaxComments/>
  </h1>
}
export default App
