import React from "react";
import {BrowserRouter, Link} from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/about">About </Link>
      </BrowserRouter>
    </div>
  );
};
