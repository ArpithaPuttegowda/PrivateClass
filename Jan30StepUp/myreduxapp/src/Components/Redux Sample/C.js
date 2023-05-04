import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const storeData = useSelector((state) => state);
  const name = storeData?.nl?.name;
  console.log(storeData?.nl?.name, "myGlobalState CCC");

  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Loc:</h1>
    </div>
  );
};
