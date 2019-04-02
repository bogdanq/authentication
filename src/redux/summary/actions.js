import axios from "axios";
import * as types from "./types";
import * as userTypes from "../user/types";
import history from "../../helpers/history";
import headers from "../../helpers/headers";
import { UserEmail } from '../../helpers/headers'

const BASE_PATH = "http://localhost:8080/";
const SUMMARY = "summary";
const baseUrl = `${BASE_PATH}${SUMMARY}`;

export const getSummary = (e, count) => ({
  type: types.GET_SUMMARY,
  promise: axios.get(`${baseUrl}?page=${e}&size=${count}`)
});

export const deleteSummary = id => ({
  type: userTypes.DELETE_SUMMARY,
  promise: axios.delete(`${baseUrl}/delete/${id}`, headers),
  payload: id
});

export const postSummary = summary => ({
  type: types.POST_SUMMARY,
  promise: axios
    .post(`${baseUrl}/add`, summary, headers)
    .then(res => history.goBack())
});

export const putSummary = (summary, id) => ({
  type: types.PUT_SUMMARY,
  promise: axios
    .put(`${baseUrl}/update/${id}`, summary, headers)
    .then(res => history.goBack())
});

export const resetLoading = () => ({
  type: types.RESET_LOADING
});

export const addComment = (comment, id) => ({
  type: types.PUT_COMMENT,
  promise: axios
    .put(`${baseUrl}/addComments/`, comment, UserEmail(id))
})

export const deleteComment = (comment, id) => ({
  type: types.DELETE_COMMENT,
  promise: axios
    .put(`${baseUrl}/deleteComments/`, {_id: comment}, UserEmail(id)),
  payload: comment
})

export const searchSummary = (title) => ({
  type: types.SEARCH_SUMMARY,
  promise: axios
    .get(`${baseUrl}?title=${title}`)
})

export const addSearch = () => ({
  type: types.SEARCH_LIST
})

export const getSummaryById = id => ({
  type: types.GET_SUMMARY_BY_ID,
  promise: axios.get(`${baseUrl}/getByEmail/${id}`)
});

export const getCountElements = count => ({
  type: types.GET_COUNT_ELEMENTS,
  payload: count
})