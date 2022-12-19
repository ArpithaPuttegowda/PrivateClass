import React, {lazy, Suspense} from "react";
import {Link, BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {PageNotFound} from "./404";
import {TableComp} from "./ControlledComponent";
import {ExampleUseCallBack} from "./ExampleUseCallBack";
import {Exception} from "./ExceptionHandling/Exception";
// import About from "./About";
// import ExampleReactMemo from "./ExampleReactMemo";
import Home from "./Home";
const About = lazy(() => import("./About"));
const ExampleReactMemo = lazy(() => import("./ExampleReactMemo"));
const ExampleUseMemo = lazy(() => import("./ExampleUseMemo"));

export const Menu = () => {
  const linkData = [
    {
      path: "/home",
      content: "Home"
    },

    {
      path: "/aboutUs",
      content: "About Us"
    },
    {
      path: "/useMemo",
      content: "Use Memo"
    },
    {
      path: "/reactMemo",
      content: "ReactMemo"
    },
    {
      path: "/useCallback",
      content: "UseCallBack"
    },
    {
      path: "/onChange",
      content: "OnChangeControlled"
    },
    {
      path: "/eh",
      content: "ExceptionHandling"
    }
  ];

  const routeData = [
    {
      route: "/home",
      ele: <Home />
    },
    {
      route: "/aboutUs",
      ele: <About />
    },
    {
      route: "/useMemo",
      ele: <ExampleUseMemo />
    },
    {
      route: "/reactMemo",
      ele: <ExampleReactMemo />
    },
    {
      route: "/useCallback",
      ele: <ExampleUseCallBack />
    },
    {
      route: "/onChange",
      ele: <TableComp header={["Name", "loc"]} />
    },
    {
      route: "eh",
      ele: <Exception />
    },
    // {
    //   route: "*",
    //   ele: <Navigate to="/home" />
    // },
    {
      route: "*",
      ele: <PageNotFound />
    }
  ];
  return (
    <div id="menu">
      <Suspense fallback={"...loading"}>
        <BrowserRouter>
          {linkData.map((obj, i) => {
            const {path, content} = obj;
            return (
              <Link key={i} to={path}>
                {content}
              </Link>
            );
          })}
          <Routes>
            {routeData.map((obj, i) => {
              return <Route key={i} path={obj.route} element={obj.ele} />;
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};
