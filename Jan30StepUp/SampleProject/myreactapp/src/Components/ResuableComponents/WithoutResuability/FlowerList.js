import React from "react";
import {OrderedListComp} from "../GenericComponents/OrderedListComp";

export const FlowerList = () => {
  const data = ["Rose", "Lilly", "Jasmin"];
  return <OrderedListComp data={data} />;
};
