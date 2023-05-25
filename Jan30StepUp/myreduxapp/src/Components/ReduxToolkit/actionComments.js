import ServerCallService from "../../ServerCallService/ServerCallService";
import { setComments } from "./ajaxSlice";

export const commentsAction = async (d) => {
  let res;
  try {
    res = await ServerCallService.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    d(setComments(res?.data));
  } catch (e) {
    res = e;
  }
};
