import React from "react";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import {About} from "./About";
import {ExampleUseMemo} from "./ExampleUseMemo";
import {Home} from "./Home";

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
    }
  ];
  return (
    <div id="menu">
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
    </div>
  );
};
