import React from "react";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import {AboutUs} from "../AboutUs";
import {GettingDataOnChange} from "../GettingDataOnChange";
import {Home} from "../Home";

export const Menu = () => {
  return (
    <div id="menu">
      <BrowserRouter>
        <div id="menu-items">
          <Link to="/home">Home</Link>
          <Link to="/aboutUs">AboutUs</Link>
          <Link to="/onChange">GettingData</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/onChange" element={<GettingDataOnChange />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
