const init = {
  posts: [],
  photos: []
};
const ajaxReducer = (state = init, action) => {
  switch (action.type) {
    case "POSTS":
      return (state = {...state, posts: action.payload});
    default:
      return state;
  }
};

export default ajaxReducer;
