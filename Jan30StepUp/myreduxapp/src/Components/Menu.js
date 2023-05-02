import React from "react";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {WithoutRedux} from "./WithoutRedux/WithoutRedux";

export const Menu = () => {
  return (
    <HashRouter>
      <div id="menu">
        <Link to="withoutRedux">WithoutRedux</Link>
        <Link to="withoutRedux">Sample redux</Link>
      </div>
      <Routes>
        <Route path="withoutRedux" element={<WithoutRedux />} />
      </Routes>
    </HashRouter>
  );
};
