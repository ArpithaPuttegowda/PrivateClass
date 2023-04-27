import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AboutUs} from "../AboutUs";
import {ExampleUseMemo} from "../Hooks/ExampleUseMemo";

export const Menu = () => {
  const [show404, setShow404] = useState(false);

  useEffect(() => {
    // Set show404 to true if the current path doesn't match any of the defined routes
    setShow404(
      window.location.pathname !== "/" &&
        !window.location.pathname.startsWith("/about") &&
        !window.location.pathname.startsWith("/useMemo") &&
        !window.location.pathname.startsWith("/reg")
    );
  }, []);

  useEffect(() => {
    // After 2 seconds, reset the URL to the home page
    if (show404) {
      setTimeout(() => {
        window.history.pushState({}, "", "/");
        setShow404(false);
      }, 2000);
    }
  }, [show404]);

  return (
    <div>
      <BrowserRouter>
        <div id="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/useMemo">Usememo</Link>
          <Link to="/reg">Registration Page</Link>
        </div>
        {show404 ? (
          <h1>Page not found</h1>
        ) : (
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route element={<AboutUs />} path="/about" />
            <Route path="/useMemo" element={<ExampleUseMemo />} />
            <Route path="/reg" element={<div>Register</div>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};
