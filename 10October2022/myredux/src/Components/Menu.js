import React from "react";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {WithoutRedux} from "./WithOutRedux/WithoutRedux";
import {WithRedux} from "./WithRedux/WithRedux";
import {ReduxGetData} from "./WithReduxClass/ReduxGetData";
import WithReduxClass from "./WithReduxClass/WithReduxClass";
import {WithReduxFunctional} from "./WithReduxFunctional/WithReduxFunctional";

export const Menu = () => {
  return (
    <HashRouter>
      <div id="menu">
        <Link to="/withoutRedux">WithoutRedux</Link>
        <Link to="/reduxSample">Redux Sample</Link>
        <Link to="/reduxSampleC">Redux SampleC</Link>
        <Link to="/reduxGetData">Redux getData</Link>
        <Link to="/reduxSampleF">Redux Sample Functional</Link>
      </div>
      <Routes>
        <Route path="/withoutRedux" element={<WithoutRedux />} />
        <Route path="/reduxSample" element={<WithRedux />} />
        <Route path="/reduxSampleC" element={<WithReduxClass />} />
        <Route path="/reduxGetData" element={<ReduxGetData />} />
        <Route path="/reduxSampleF" element={<WithReduxFunctional />} />
      </Routes>
    </HashRouter>
  );
};
