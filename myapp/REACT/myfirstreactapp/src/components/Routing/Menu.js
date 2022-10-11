import React from "react";
import {Link, BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./About";
import {Home} from "./Home";

export const Menu = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
