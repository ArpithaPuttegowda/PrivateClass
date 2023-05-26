import React, { useContext } from "react";
import { ctx } from "../ctx";

export const C = () => {
  const myData = useContext(ctx);
  return (
    <div>
      <h1>Name:{myData?.state?.name}</h1>
      <h1>Loc:{myData?.state?.loc}</h1>
    </div>
  );
};
