import React, {Component, lazy, Suspense} from "react";
import {Link, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Context from "./Context";
import Home from "./Home";
import ResualbeComponents from "./ResualbeComponents";
const ListKeys = lazy(() => import("./ListKeys"));
const LifeCycleMethods = lazy(() => import("./LifeCycleMethods"));
const ExceptionHandling = lazy(() => import("./ExceptionHandling"));
const HOC = lazy(() => import("./HOC"));

//Lazy laoding or Code splitting

export default class Menu extends Component {
  render() {
    const LinkData = [
      {href: "home", content: "HOME"},
      {href: "hoc", content: "HOC"},
      {href: "EH", content: "EH"},
      {href: "context", content: "Context"},
      {href: "lifeCycleMethods", content: "lifeCycleMethods"},
      {href: "resuableComponent", content: "Resuable Component"}
    ];
    const RouteData = [
      {path: "home", element: <Home />},
      {path: "hoc", element: <HOC />},
      {path: "EH", element: <ExceptionHandling />},
      {path: "context", element: <Context />},
      {path: "*", element: <Navigate to="home" />},
      {path: "home/:id/:tex", element: <HOC />},
      {path: "listKeys", element: <ListKeys />},
      {
        path: "lifeCycleMethods",
        element: <LifeCycleMethods name="Sachin" loc="Mumbai" runs="10" />
      },
      {
        path: "resuableComponent",
        element: <ResualbeComponents />
      }
    ];

    return (
      <BrowserRouter>
        <Suspense fallback="LOADING....">
          <div id="menu">
            {LinkData.map((obj, i) => {
              return <Link to={obj.href}>{obj.content}</Link>;
            })}
          </div>
          <Routes>
            {RouteData.map((routeObj, i) => {
              return <Route path={routeObj.path} element={routeObj.element} />;
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
}
