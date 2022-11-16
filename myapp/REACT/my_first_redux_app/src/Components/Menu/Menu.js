import React from "react";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import {ReduxSample} from "../ReduxSample/ReduxSample";
import {WithoutRedux} from "../WithoutRedux/WithoutRedux";
import {AjaxAxios} from "../AjaxAxios";
import {ReduxSampleClass} from "../ReduxSampleClass/ReduxSampleClass";
import {ReduxToolkit} from "../ReduxToolkit/ReduxToolkit";
import {UseReducerExample} from "../UseReducerHook/UseReducerExample";
import {UseReducerGlobalState} from "../UseReducerHook/UseReducerGlobalState";

export const Menu = () => {
  return (
    <div>
      <HashRouter>
        <div id="menu-items">
          <Link to="/home">Home</Link>
          <Link to="/withoutRedux"> WithoutRedux </Link>
          <Link to="/redux-sample"> Redux Sample </Link>
          <Link to="redux-sample_c">Redux Sample Class</Link>
          <Link to="/axios">Axios</Link>
          <Link to="redux-toolkit">Redux toolkit</Link>
          <Link to="useReducer">UseReducer</Link>
          <Link to="useReducerGlobal">UseReducer+Context</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/withoutRedux" element={<WithoutRedux />} />
          <Route path="/redux-sample" element={<ReduxSample />} />
          <Route path="/axios" element={<AjaxAxios />} />
          <Route path="redux-sample_c" element={<ReduxSampleClass />} />
          <Route path="redux-toolkit" element={<ReduxToolkit />} />
          <Route path="useReducer" element={<UseReducerExample />} />
          <Route path="useReducerGlobal" element={<UseReducerGlobalState />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
