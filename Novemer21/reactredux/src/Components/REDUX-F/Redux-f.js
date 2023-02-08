import React from "react";
import {MainComp} from "../ReduxConnect/MainComp";
import {A} from "./A";
import {B} from "./B";
import {C} from "./C";

export const ReduxF = () => {
  return (
    <div>
      <A />
      <B />
      <C />
      <h1>Using Connect Method</h1>
      <MainComp />
    </div>
  );
};
