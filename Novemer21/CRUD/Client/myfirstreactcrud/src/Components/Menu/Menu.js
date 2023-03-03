import React, {lazy, Suspense} from "react";
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import AboutUs from "../AboutUs";
// import {Home} from "../Home";
// import {RegistrationPage} from "../RegistrationPage";
// const AboutUs = lazy(() => import("../AboutUs"));
const Home = lazy(() => import("../Home"));
const RegistrationPage = lazy(() => import("../RegistrationPage"));

export const Menu = () => {
  return (
    <div>
      <Suspense fallback="....loading">
        <HashRouter>
          <div id="menu">
            <Link to="/home">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/registration">RegistrationPage</Link>
          </div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </HashRouter>
      </Suspense>
    </div>
  );
};
