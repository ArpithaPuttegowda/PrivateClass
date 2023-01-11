import {ServerCallService} from "../../ServerCallService/ServerCallService";

export const thunkAction = () => {
  return (dispatch, storeData) => {
    console.log(storeData, "state");
    ServerCallService.get("https://jsonplaceholder.typicode.com/photos").then(
      (res) => {
        dispatch({
          type: "PHOTOS",
          payload: res.data
        });
      }
    );
  };
};
