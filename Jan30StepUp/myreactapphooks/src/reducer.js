export const reducer = (state, action) => {
  if (action.type === "NAME") {
    state = { ...state, name: action.payload };
  }
  if (action.type === "LOC") {
    state = { ...state, loc: action.payload };
  }
  return state;
};
