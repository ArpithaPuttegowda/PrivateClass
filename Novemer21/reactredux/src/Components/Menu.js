import React from "react";
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import {ReduxF} from "./REDUX-F/Redux-f";
import ReduxMiddleware from "./ReduxMiddleware";

export const Menu = () => {
  return (
    <BrowserRouter>
      <div id="menu-items">
        <Link to="/redux-f">REDUX-F</Link>
        <Link to="/redux-c">REDUX-C</Link>
        <Link to="/redux-mid">REDUX-Middleware</Link>
      </div>
      <div style={{textAlign: "center"}}>
        <Routes>
          <Route path="redux-f" element={<ReduxF />} />
          {/* <Route path="redux-c" element={<ReduxC />} /> */}
          <Route path="redux-mid" element={<ReduxMiddleware />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
