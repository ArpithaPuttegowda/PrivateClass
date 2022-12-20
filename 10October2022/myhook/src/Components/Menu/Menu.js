import React, {lazy, Suspense} from "react";
import {Link, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import GettingDataOnChange from "../GettingDataOnChange";
// import AboutUs from "../AboutUs";
const Home = lazy(() => import("../Home"));
const AboutUs = lazy(() => import("../AboutUs"));
// import Home from "../Home";

export const Menu = () => {
  const linkData = [
    {href: "/home", content: "Home"},
    {href: "/aboutUs", content: "AboutUs"},
    {href: "/onChange", content: "GettingData"}
  ];
  const routeData = [
    {path: "/home", element: <Home />},
    {path: "/aboutUs", element: <AboutUs />},
    {path: "/onChange", element: <GettingDataOnChange />},
    {path: "/", element: <Home />},
    {path: "*", element: <Navigate to="/home" />}
  ];
  return (
    <div id="menu">
      <BrowserRouter>
        <Suspense fallback="...loading">
          <div id="menu-items">
            {linkData.map((obj) => {
              return <Link to={obj.href}>{obj.content}</Link>;
            })}
          </div>
          <Routes>
            {routeData.map((obj) => {
              const {path, element} = obj;
              return <Route path={path} element={element} />;
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
