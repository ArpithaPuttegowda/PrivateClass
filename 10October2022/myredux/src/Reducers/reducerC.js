import {initC} from "../Utils/init";

export const reducerC = (state = initC, action) => {
  switch (action.type) {
    case "NAME_C":
      return (state = {...state, nameC: action.payload});
    case "LOC_C":
      return (state = {...state, locC: action.payload});
    default:
      return state;
  }
};
