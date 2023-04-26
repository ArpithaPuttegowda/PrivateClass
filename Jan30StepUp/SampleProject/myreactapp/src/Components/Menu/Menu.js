import React from "react";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import {AboutUs} from "../AboutUs";

export const Menu = () => {
  return (
    <div>
      <BrowserRouter>
        <div id="menu">
          <Link to="home">Home</Link>
          <Link to="about">About </Link>
        </div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route element={<AboutUs />} path="about" />
          <Route element={<div>Home</div>} path="home" />
          {/* <Route element={<h1>Page not found 404</h1>} path="*" /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// const Link =({to,children})=>{
//   return<a href={to}>{children}</a>
// }

// <Link to="home">Home</Link>
