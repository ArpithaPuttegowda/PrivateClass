import React, { Suspense, lazy } from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Loader } from "./Loader";
// import WithoutRedux from "./WithoutRedux/WithoutRedux";
// import ReduxSample from "./Redux Sample/ReduxSample";
import Ajax from "./Ajax";
import { ReduxWithConnect } from "./UsingConnectMethod/ReduxWithConnect";
import { Users } from "./Thunk-redux/Users";
import { ReduxToolkit } from "./ReduxToolkit/ReduxToolkit";
import { GetComments } from "./ReduxToolkit/GetComments";
import { Counter } from "./useReducer/Counter";
const WithoutRedux = lazy(() => import("./WithoutRedux/WithoutRedux"));
const ReduxSample = lazy(() => {
  return import("./Redux Sample/ReduxSample");
});
// const Ajax = lazy(() => import("./Ajax"));

export const Menu = () => {
  const linkData = [
    {
      to: "withoutRedux",
      children: "WithOutRedux",
    },
    {
      to: "redux-sample",
      children: "Redux Sample",
    },
    {
      to: "ajax",
      children: "Ajax-Ex",
    },
    {
      to: "thunk",
      children: "Thunk",
    },
    {
      to: "reduxC",
      children: "Redux With Connect",
    },
    {
      to: "redux-toolkit",
      children: "Redux toolkit",
    },
    {
      to: "comments",
      children: "GET COMMENTS",
    },
    {
      to: "useReducer",
      children: "useReducer",
    },
  ];
  const routeData = [
    { path: "withoutRedux", element: <WithoutRedux /> },
    { path: "redux-sample", element: <ReduxSample /> },
    { path: "ajax", element: <Ajax /> },
    { path: "reduxC", element: <ReduxWithConnect /> },
    {
      path: "thunk",
      element: <Users />,
    },
    {
      path: "redux-toolkit",
      element: <ReduxToolkit />,
    },
    {
      path: "comments",
      element: <GetComments />,
    },
    {
      path: "useReducer",
      element: <Counter />,
    },
  ];
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <div id="menu">
          {linkData.map((obj, i) => {
            return (
              <Link to={obj?.to} key={obj?.to}>
                {obj?.children}
              </Link>
            );
          })}
        </div>
        <Routes>
          {routeData.map((obj) => {
            return <Route path={obj?.path} element={obj?.element} />;
          })}
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
