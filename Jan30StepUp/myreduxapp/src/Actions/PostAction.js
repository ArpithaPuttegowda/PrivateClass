import ServerCallService from "../ServerCallService/ServerCallService";
export const postAction = (dispatch) => {
  ServerCallService.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      dispatch({
        type: "AJAX",
        payload: res.data
      });
    })
    .catch(() => {});
};
