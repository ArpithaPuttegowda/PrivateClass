import React from "react";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import {ReduxSample} from "../ReduxSample/ReduxSample";
import {WithoutRedux} from "../WithoutRedux/WithoutRedux";
import {AjaxAxios} from "../AjaxAxios";

export const Menu = () => {
  return (
    <div>
      <HashRouter>
        <div id="menu-items">
          <Link to="/home">Home</Link>
          <Link to="/withoutRedux"> WithoutRedux </Link>
          <Link to="/redux-sample"> Redux Sample </Link>
          <Link to="/axios">Axios</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/withoutRedux" element={<WithoutRedux />} />
          <Route path="/redux-sample" element={<ReduxSample />} />
          <Route path="/axios" element={<AjaxAxios />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
