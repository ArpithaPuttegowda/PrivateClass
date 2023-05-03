import React from "react";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {WithoutRedux} from "./WithoutRedux/WithoutRedux";
import {ReduxSample} from "./Redux Sample/ReduxSample";

export const Menu = () => {
  return (
    <HashRouter>
      <div id="menu">
        <Link to="withoutRedux">WithoutRedux</Link>
        <Link to="redux-sample">Sample redux</Link>
      </div>
      <Routes>
        <Route path="withoutRedux" element={<WithoutRedux />} />
        <Route path="redux-sample" element={<ReduxSample />} />
      </Routes>
    </HashRouter>
  );
};
