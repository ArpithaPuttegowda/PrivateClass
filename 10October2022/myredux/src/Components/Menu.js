import React from "react";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {WithoutRedux} from "./WithOutRedux/WithoutRedux";
import {WithRedux} from "./WithRedux/WithRedux";

export const Menu = () => {
  return (
    <HashRouter>
      <div id="menu">
        <Link to="/withoutRedux">WithoutRedux</Link>
        <Link to="/reduxSample">Redux Sample</Link>
      </div>
      <Routes>
        <Route path="/withoutRedux" element={<WithoutRedux />} />
        <Route path="/reduxSample" element={<WithRedux />} />
      </Routes>
    </HashRouter>
  );
};
