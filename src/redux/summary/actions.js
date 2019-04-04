import * as types from "./types";
import * as userTypes from "../user/types";
import history from "../../helpers/history";
import headers from "../../helpers/headers";
import { UserEmail } from '../../helpers/headers'
import Request from "../../helpers/Request";

const SUMMARY = "summary";

export const getSummary = (e, count) => ({
  type: types.GET_SUMMARY,
  promise: Request.get(`/${SUMMARY}?page=${e}&size=${count}`)
});

export const deleteSummary = id => ({
  type: userTypes.DELETE_SUMMARY,
  promise: Request.delete(`/${SUMMARY}/delete/${id}`, headers),
  payload: id
});

export const postSummary = summary => ({
  type: types.POST_SUMMARY,
  promise: Request
    .post(`/${SUMMARY}/add`, summary, headers)
    .then(res => history.goBack())
});

export const putSummary = (summary, id) => ({
  type: types.PUT_SUMMARY,
  promise: Request
    .put(`/${SUMMARY}/update/${id}`, summary, headers)
    .then(res => history.goBack())
});

export const resetLoading = () => ({
  type: types.RESET_LOADING
});

export const addComment = (comment, id) => ({
  type: types.PUT_COMMENT,
  promise: Request
    .put(`/${SUMMARY}/addComments/`, comment, UserEmail(id))
})

export const deleteComment = (comment, id) => ({
  type: types.DELETE_COMMENT,
  promise: Request
    .put(`/${SUMMARY}/deleteComments/`, {_id: comment}, UserEmail(id)),
  payload: comment
})

export const searchSummary = (title) => ({
  type: types.SEARCH_SUMMARY,
  promise: Request
    .get(`/${SUMMARY}?title=${title}`)
})

export const addSearch = () => ({
  type: types.SEARCH_LIST
})

export const getSummaryById = id => ({
  type: types.GET_SUMMARY_BY_ID,
  promise: Request.get(`/${SUMMARY}/getByEmail/${id}`)
});

export const getCountElements = count => ({
  type: types.GET_COUNT_ELEMENTS,
  payload: count
})