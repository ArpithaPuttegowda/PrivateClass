import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AboutUs} from "../AboutUs";
import {ExampleUseMemo} from "../Hooks/ExampleUseMemo";
import {PageNotFound} from "../PageNotFount";
import {ExampleCallback} from "../Hooks/ExampleCallback";
import {Home} from "../Home";

export const Menu = () => {
  return (
    <div>
      <BrowserRouter>
        <div id="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/useMemo">Usememo</Link>
          <Link to="/useCb">UseCallBack</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<AboutUs />} path="/about" />
          <Route path="/useMemo" element={<ExampleUseMemo />} />
          <Route path="/useCb" element={<ExampleCallback />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
