import React from "react";
import {OrderedListComp} from "../GenericComponents/OrderedListComp";

export const ColorList = () => {
  const data = ["Red", "Blue", "Yellow", "Orange"];
  return <OrderedListComp data={data} />;
};
