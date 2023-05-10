import {initDataC} from "../Utils/init";

const nameLoc = (state = initDataC, action) => {
  switch (action.type) {
    case "NAME_C":
      return (state = {...state, name: action.payload});
    case "LOC_C":
      return (state = {...state, loc: action.data});
    default:
  }
  return state;
};
export default nameLoc;
