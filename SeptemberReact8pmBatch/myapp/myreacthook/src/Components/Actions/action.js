import {ServerCallService} from "../../ServerCallService/ServerCallService";

export const postAction = (d) => {
  ServerCallService.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      d({
        type: "POSTS",
        payload: res.data
      });
    })
    .catch((res) => {
      console.log(res);
    });
};
