import * as types from './types';
import { UserEmail } from '../../helpers/headers';
import Request from "../../helpers/Request";

const USERS = 'users';

export const getUserSummary = email => ({
  type: types.GET_USER_SUMMARY,
  promise: Request.get(`/${USERS}/summaries`, UserEmail(email))
})

export const getSummaryFavorites = arr => ({
  type: types.GET_FAVORITE,
  promise: Request.put(`/${USERS}/getSummary`, arr)
})