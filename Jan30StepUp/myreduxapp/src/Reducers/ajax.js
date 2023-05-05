import {initAjax} from "../Utils/init";

const ajaxRed = (state = initAjax, action) => {
  if (action.type === "AJAX") {
    state = {...state, data: action.payload};
  }
  return state;
};
export default ajaxRed;
