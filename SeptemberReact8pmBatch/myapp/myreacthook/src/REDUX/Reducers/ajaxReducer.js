const init = {
  posts: [],
  photos: []
};
const ajaxReducer = (state = init, action) => {
  switch (action.type) {
    case "POSTS":
      return (state = {...state, posts: action.payload});
    case "Photos":
      return (state = {...state, photos: action.data});
    default:
      return state;
  }
};

export default ajaxReducer;
