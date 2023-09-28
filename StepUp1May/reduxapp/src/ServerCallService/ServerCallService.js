import axios from "axios"
export class ServerCallService{
   static fetchData(url){
    return axios.get(url)
    }

    static insertData(url,data){
        return axios.post(url,data)
    }
}

