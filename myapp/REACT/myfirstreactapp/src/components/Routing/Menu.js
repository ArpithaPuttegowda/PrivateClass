import React, {lazy, Suspense} from "react";
import {Link, BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Home from "./Home";
import {Parent} from "./ForwardRef";
import {PageNotFound} from "./404PageNotFound";
import {ExampleUseMemo} from "./ExampleUseMemo";
import {ExampleUseCallback} from "./ExampleUseCallback";

const HOCExample = lazy(() => import("../HOC/HOCExample"));
const About = lazy(() => import("./About"));

export const Menu = () => {
  const linkData = [
    {path: "/home", content: "HOME"},
    {path: "/about", content: "About Us"},
    {path: "/hoc", content: "HOC"},
    {
      path: "/forwardRef",
      content: "FORWARD REF"
    },
    {
      path: "/useMemo",
      content: "USE MEMO"
    },
    {
      path: "/useCallback",
      content: "USE CALLBACK"
    }
  ];

  const routeData = [
    {path: "/", element: <Home />},
    {path: "/home", element: <Home />},
    {path: "/about", element: <About />},
    {path: "/*", element: <Navigate to="/home" />},
    {
      path: "/forwardRef",
      element: <Parent />
    },
    {
      path: "/hoc",
      element: <HOCExample />
    },
    {
      path: "/useMemo",
      element: <ExampleUseMemo />
    },
    {
      path: "/useCallback",
      element: <ExampleUseCallback />
    }
  ];
  return (
    <div>
      <Suspense fallback="...loading">
        <BrowserRouter>
          <div id="menu-items">
            {linkData?.map((obj, index) => {
              const {path, content} = obj;
              return (
                <Link key={index} to={path}>
                  {content}
                </Link>
              );
            })}
          </div>
          <Routes>
            {routeData?.map((routeObj, index) => {
              return (
                <Route
                  key={index + routeObj.path}
                  path={routeObj.path}
                  element={routeObj.element}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};
