import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const storeData = useSelector((state) => state);
  const name = storeData?.nl?.name;
  const loc = storeData?.nl?.loc;
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Loc:{loc}</h1>
    </div>
  );
};
