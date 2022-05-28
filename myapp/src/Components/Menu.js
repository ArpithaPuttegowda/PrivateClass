import React, {Component} from "react";
import {Link, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Context from "./Context";
import ExceptionHandling from "./ExceptionHandling";
import HOC from "./HOC";
import Home from "./Home";

export default class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="menu">
          <Link to="home">Home</Link>
          <Link to="hoc">HOC</Link>
          <Link to="EH">EH</Link>
          <Link to="context">Context</Link>
        </div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="hoc" element={<HOC />} />
          <Route path="EH" element={<ExceptionHandling />} />
          <Route path="context" element={<Context />} />
          <Route path="*" element={<Navigate to="home" />} />
          <Route path="home/:id/:tex" element={<HOC />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
