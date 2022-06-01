import React, {Component} from "react";
import {Link, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Context from "./Context";
import ExceptionHandling from "./ExceptionHandling";
import HOC from "./HOC";
import Home from "./Home";
import LifeCycleMethods from "./LifeCycleMethods";
import ListKeys from "./ListKeys";

export default class Menu extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="menu">
          <Link to="home">Home</Link>
          <Link to="hoc">HOC</Link>
          <Link to="EH">EH</Link>
          <Link to="context">Context</Link>
          <Link to="lifeCycleMethods">lifeCycleMethods</Link>
          <Link to="listKeys">ListKeys</Link>
        </div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="hoc" element={<HOC />} />
          <Route path="EH" element={<ExceptionHandling />} />
          <Route path="context" element={<Context />} />
          <Route path="*" element={<Navigate to="home" />} />
          <Route path="home/:id/:tex" element={<HOC />} />
          <Route path="listKeys" element={<ListKeys />} />
          <Route
            path="lifeCycleMethods"
            element={<LifeCycleMethods name="Sachin" loc="Mumbai" runs="10" />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
