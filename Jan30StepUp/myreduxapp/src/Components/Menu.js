import React from "react";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {WithoutRedux} from "./WithoutRedux/WithoutRedux";
import {ReduxSample} from "./Redux Sample/ReduxSample";
import {Ajax} from "./Ajax";

export const Menu = () => {
  return (
    <HashRouter>
      <div id="menu">
        <Link to="withoutRedux">WithoutRedux</Link>
        <Link to="redux-sample">Sample redux</Link>
        <Link to="ajax">Ajax</Link>
      </div>
      <Routes>
        <Route path="withoutRedux" element={<WithoutRedux />} />
        <Route path="redux-sample" element={<ReduxSample />} />
        <Route path="ajax" element={<Ajax />} />
      </Routes>
    </HashRouter>
  );
};
