import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AboutUs} from "../AboutUs";
import {ExampleUseMemo} from "../Hooks/ExampleUseMemo";
import {PageNotFound} from "../PageNotFount";

export const Menu = () => {
  return (
    <div>
      <BrowserRouter>
        <div id="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/useMemo">Usememo</Link>
          <Link to="/reg">Registration Page</Link>
        </div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route element={<AboutUs />} path="/about" />
          <Route path="/useMemo" element={<ExampleUseMemo />} />
          <Route path="/reg" element={<div>Register</div>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
