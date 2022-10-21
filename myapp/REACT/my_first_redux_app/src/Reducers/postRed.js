const postRed = (state = {posts: []}, action) => {
  if (action.type === "POSTS") {
    state = {...state, posts: action.payload};
  }
  console.log(state, "posts ");
  return state;
};

export default postRed;
