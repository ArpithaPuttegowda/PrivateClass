import React from "react"
import {Link,HashRouter,Routes,Route} from "react-router-dom"
import { AjaxComments } from "./Middlewares/comments"
export const Menu = () => {
  return (
      <HashRouter>
        <Link to="comments">Ajax Comments</Link>
        <Routes>
            <Route path="comments" element={<AjaxComments/>}/>
        </Routes>
      </HashRouter>
  )
}
