import axios from "axios";

class ServerCallService {
  static get(url) {
    return axios.get(url);
  }
}

export default ServerCallService;
