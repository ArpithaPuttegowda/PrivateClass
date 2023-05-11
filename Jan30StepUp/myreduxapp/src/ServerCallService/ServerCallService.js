import axios from "axios";

class ServerCallService {
  static get(url) {
    return axios.get(url);
  }
  static post(url, data) {
    return axios.post(url, data);
  }
}
export default ServerCallService;
