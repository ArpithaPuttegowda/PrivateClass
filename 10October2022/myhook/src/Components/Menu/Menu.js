import React from "react";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "../Home";

export const Menu = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Link to="/about">AboutUs</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={"arpitha"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
