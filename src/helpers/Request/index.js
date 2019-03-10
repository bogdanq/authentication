import axios from "axios";

import headers from "../../helpers/headers";

const BASE_PATH = "http://localhost:8080";

export default class Request {
  static send(type, url, data, success, reject, spiner) {
    spiner = spiner || { start: () => {}, stop: () => {} };
    reject = reject || (() => {});
    success = success || (() => {});
    data = data || {};
    spiner.start();
    return axios[type](`${BASE_PATH}${url}`, data, headers).then(
      response => {
        return new Promise((res, rej) => {
          success(response);
          spiner.stop();
          res(response);
        });
      },
      err => {
        return new Promise((res, rej) => {
          reject(err);
          spiner.stop();
          rej(err);
        });
      }
    );
  }

  static post(url, data, success, reject, spiner) {
    return Request.send("post", url, data, success, reject, spiner);
  }

  static put(url, data, success, reject, spiner) {
    return Request.send("put", url, data, success, reject, spiner);
  }

  static get(url, data, success, reject, spiner) {
    return Request.send("get", url, data, success, reject, spiner);
  }

  static delete(url, data, success, reject, spiner) {
    return Request.send("delete", url, data, success, reject, spiner);
  }
}
