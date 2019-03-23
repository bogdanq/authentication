import axios from "axios";
import cookies from "browser-cookies";

import * as types from "./types";
import headers from "../../helpers/headers";
import { UserEmail } from "../../helpers/headers";
import Request from "../../helpers/Request";

const BASE_PATH = "http://localhost:8080/";
const USERS = "users";
const baseUrl = `${BASE_PATH}${USERS}`;

export const signUp = (email, password, firstName, lastName) => ({
  type: types.SIGN_UP,
  promise: axios.post(`${baseUrl}/signup`, {
    email,
    password,
    firstName,
    lastName
  })
});

export const signIn = (email, password) => ({
  type: types.SIGN_IN,
  promise: axios.post(`${baseUrl}/signin`, {
    email,
    password
  })
});

export const logOut = () => {
  cookies.erase("token");
};

export const getUser = () => ({
  type: types.GET_USER,
  promise: Request.get("/users/current-user", headers)
});

export const toggleFavorite = (id, email) => dispatch => {
  dispatch({
    type: types.TOGGLE_FAVORITE
  });

  axios.put(`${baseUrl}/favoriteSummary`, { id: id }, UserEmail(email)).then(
    res => {
      dispatch({
        type: types.TOGGLE_FAVORITE_SUCCESS,
        payload: id
      });
    },
    err => {
      dispatch({
        type: types.TOGGLE_FAVORITE_ERROR
      });
    }
  );
};
