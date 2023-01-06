import React from "react";
import store from "../../store/store";

export const ReduxGetData = () => {
  const state = store.getState();
  return (
    <div>
      <h1>Name:{state?.nameLocC?.nameC}</h1>
      <h1>Loc:{state?.nameLocC?.locC}</h1>
    </div>
  );
};
