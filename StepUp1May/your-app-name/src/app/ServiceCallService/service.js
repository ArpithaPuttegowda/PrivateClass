const { default: axios } = require("axios");

class ServiceCall{
   static get(url){
      return axios.get(url)
    }
    static post(url,data){
        return axios.post(url,data)
    }
}

export default ServiceCall