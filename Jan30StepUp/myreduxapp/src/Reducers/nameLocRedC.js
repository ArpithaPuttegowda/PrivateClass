import {initDataC} from "../Utils/init";

const nameLoc = (state = initDataC, action) => {
  switch (action.type) {
    case "NAME_C":
      return (state = {...state, name: action.payload});
    default:
  }

  return state;
};
export default nameLoc;
