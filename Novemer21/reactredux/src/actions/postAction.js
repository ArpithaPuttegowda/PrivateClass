import ServerCallService from "../Services/ServerCallService";

const postAction = (dispatch) => {
  ServerCallService.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      dispatch({
        type: "POSTS",
        res: res.data
      });
    })
    .catch((res) => {
      console.log(res);
    });
};
export default postAction;
