import ServerCallService from "../ServerCallService/ServerCallService";

const thunkAction = () => {
  return (d, state) => {
    ServerCallService.get("https://jsonplaceholder.typicode.com/comments").then(
      (res) => {
        d({
          type: "Comments",
          payload: res?.data
        });
      }
    );
  };
};
export default thunkAction;
