import ServerCallService from "../Services/ServerCallService";

const thunkAction = () => {
  return (dispatch, store) => {
    ServerCallService.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        dispatch({
          type: "COMMENTS",
          payload: res.data
        });
      })
      .catch((res) => {
        console.log(res);
      });
  };
};
export default thunkAction;
