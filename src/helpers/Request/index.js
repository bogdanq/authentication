import axios from "axios";
const BASE_PATH = "http://localhost:8080";

export default class Request {
  static send = (type, url, data, params) => {
    return axios[type](`${BASE_PATH}${url}`, data, params)
      .then(res => {
        return res
      })
      .catch(err => {
        console.log(err)
      })
  }

  static get = (url, data) => Request.send("get", url, data);

  static post = (url, data, params) => Request.send("post", url, data, params);

  static put = (url, data, params) => Request.send("put", url, data, params);

  static delete = (url, params) => Request.send("delete", url, params);
}
