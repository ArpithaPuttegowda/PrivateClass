import {initialStateClass} from "../Utils/init";

export const nameLocRedClass = (state = initialStateClass, action) => {
  switch (action.type) {
    case "NAME_C":
      console.log(state, "state inside switch");
      return (state = {...state, name: action.payload});
    case "LOC_C":
      console.log(state, "state inside switch");
      return (state = {...state, loc: action.payload});
    default:
      return state;
  }
};
