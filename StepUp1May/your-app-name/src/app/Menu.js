"use client"
import React from "react"
import {Link,HashRouter,Routes,Route} from "react-router-dom"
import { AddNames } from "./AddNames"
import { AjaxComments } from "./Middlewares/comments"
export const Menu = () => {
  return (
      <HashRouter>
        <div id="menu-items">
        <Link to="comments">Ajax Comments</Link>
        <Link to="thunk">Thunk</Link>
        <Link to="saga">Saga</Link>
        <Link to="addNames">Add Names</Link>
        </div>
        <Routes>
            <Route path="comments" element={<AjaxComments/>}/>
            <Route path="addNames" element={<AddNames/>}/>
        </Routes>
      </HashRouter>
  )
}
