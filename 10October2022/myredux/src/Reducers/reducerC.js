import {initC} from "../Utils/init";

export const reducerC = (state = initC, action) => {
  switch (action.type) {
    case "NAME_C":
      return (state = {...state, nameC: action.payload});
    case "LOC_C":
      return (state = {...state, locC: action.payload});
    case "NAME_F":
      return (state = {...state, nameF: action.data});
    case "LOC_F":
      return (state = {...state, locF: action.loc});
    default:
      return state;
  }
};
