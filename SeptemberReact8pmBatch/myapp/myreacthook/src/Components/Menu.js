import React from "react";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import {About} from "./About";
import {Home} from "./Home";

export const Menu = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/aboutUs">AboutUs</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
