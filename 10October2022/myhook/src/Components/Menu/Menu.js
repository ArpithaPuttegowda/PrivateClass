import React, {lazy, Suspense} from "react";
import {Link, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {ExampleForwardRef} from "../ExampleForwardRef";
import {Exception} from "../ExceptionHandling/Exception";
import GettingDataOnChange from "../GettingDataOnChange";
import {ExampleCallback} from "../Hooks/ExampleCallback";
import {WithoutJSX} from "../WithoutJSX/WithoutJSX";
// import {ExampleUseMemo} from "../Hooks/ExampleUseMemo";
// import AboutUs from "../AboutUs";
const Home = lazy(() => import("../Home"));
const AboutUs = lazy(() => import("../AboutUs"));
const ExampleUseMemo = lazy(() => import("../Hooks/ExampleUseMemo"));
// import Home from "../Home";

export const Menu = () => {
  const linkData = [
    {href: "/home", content: "Home"},
    {href: "/aboutUs", content: "AboutUs"},
    {href: "/onChange", content: "GettingData"},
    {
      href: "/useMemo",
      content: "UseMemo"
    },
    {
      href: "/useCallback",
      content: "UseCallback"
    },
    {
      href: "/forwardRef",
      content: "Forward Ref"
    },
    {
      href: "/eh",
      content: "Exception Handling"
    },
    {
      href: "/jsx",
      content: "Without JSX"
    }
  ];
  const routeData = [
    {path: "/home", element: <Home />},
    {path: "/aboutUs", element: <AboutUs />},
    {path: "/onChange", element: <GettingDataOnChange />},
    {path: "/", element: <Home />},
    {path: "*", element: <Navigate to="/home" />},
    {
      path: "/useMemo",
      element: <ExampleUseMemo />
    },
    {
      path: "/useCallback",
      element: <ExampleCallback />
    },
    {
      path: "/forwardRef",
      element: <ExampleForwardRef />
    },
    {
      path: "/eh",
      element: <Exception />
    },
    {
      path: "/jsx",
      element: <WithoutJSX />
    }
  ];
  return (
    <div id="menu">
      <BrowserRouter>
        <Suspense fallback="...I'm loading">
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
