import React from "react";
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import {ReduxF} from "./REDUX-F/Redux-f";

export const Menu = () => {
  return (
    <BrowserRouter>
      <div id="menu-items">
        <Link to="/redux-f">REDUX-F</Link>
        <Link to="/redux-c">REDUX-C</Link>
      </div>
      <div style={{textAlign: "center"}}>
        <Routes>
          <Route path="redux-f" element={<ReduxF />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
