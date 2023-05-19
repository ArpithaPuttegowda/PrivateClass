import { initAjax } from "../Utils/init";

const ajaxRed = (state = initAjax, action) => {
  if (action.type === "AJAX") {
    state = { ...state, data: action.payload };
  }
  if (action.type === "Comments") {
    state = { ...state, comments: action.payload };
  }
  if (action.type === "USERS") {
    state = { ...state, users: action.payload };
  }
  if (action.type === "USERS_SAGA") {
    state = { ...state, users_saga: action.payload };
  }
  if (action.type === "ERROR_USERS") {
    state = { ...state, saga_error_message_users: action.payload };
  }
  if (action.type === "TODO") {
    state = { ...state, todo: action.todo };
  }
  return state;
};
export default ajaxRed;
