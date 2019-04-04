import cookies from "browser-cookies";

import * as types from "./types";
import headers from "../../helpers/headers";
import { UserEmail } from "../../helpers/headers";
import Request from "../../helpers/Request";

const USERS = 'users'

export const signUp = (email, password, firstName, lastName) => ({
  type: types.SIGN_UP,
  promise: Request.post(`/${USERS}/signup`, {
    email,
    password,
    firstName,
    lastName
  })
});

export const signIn = (email, password) => ({
  type: types.SIGN_IN,
  promise: Request.post(`/${USERS}/signin`, {
    email,
    password
  })
});

export const logOut = () => {
  cookies.erase("token");
};

export const getUser = () => ({
  type: types.GET_USER,
  promise: Request.get(`/${USERS}/current-user`, headers)
});

export const toggleFavorite = (id, email) => dispatch => {
  dispatch({
    type: types.TOGGLE_FAVORITE
  });

  Request.put(`/${USERS}/favoriteSummary`, { id: id }, UserEmail(email)).then(
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
