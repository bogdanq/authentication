import axios from 'axios'
import * as types from './types'
import * as userTypes from '../user/types'
import history from '../../helpers/history'
import headers from '../../helpers/headers'

const BASE_PATH = 'http://localhost:8080/'
const SUMMARY = 'summary'
const baseUrl = `${BASE_PATH}${SUMMARY}`

export const getSummary = () => ({
  type: types.GET_SUMMARY,
  promise: axios.get(`${baseUrl}`)
})

export const getSummaryById = (id) => ({
  type: types.GET_SUMMARY_BY_ID,
  promise: axios.get(`${baseUrl}/getByEmail/${id}`)
})

export const deleteSummary = id => dispatch => {
  dispatch({
    type: userTypes.DELETE_SUMMARY,
    promise: axios.delete(`${baseUrl}/delete/${id}`, headers)
  })

  dispatch({
    type: types.DELETE_SUMMARY,
    promise: axios.delete(`${baseUrl}/delete/${id}`, headers)
  })
}

export const postSummary = (summary) => dispatch => {
  dispatch({
    type: types.POST_SUMMARY,
  })

 axios.post(`${baseUrl}/add`, {
    title: summary.title,
    phone: summary.phone,
    description: summary.description,
    tags: summary.tags,
    history: summary.history,
    education: summary.education,
    language: summary.language
  }, headers).then(res => {  
    dispatch({
      type: types.POST_SUMMARY_SUCCESS
    })
    history.goBack()
  }, err => {
    console.log(err)
  })
}

export const putSummary = (summary, id) => dispatch => {
  dispatch({
    type: types.PUT_SUMMARY,
  })

 axios.put(`${baseUrl}/update/${id}`, {
    title: summary.title,
    phone: summary.phone,
    description: summary.description,
    tags: summary.tags,
    history: summary.history,
    education: summary.education,
    language: summary.language
  }, headers).then(res => {  
    dispatch({
      type: types.PUT_SUMMARY_SUCCESS
    })
    history.goBack()
  }, err => {
    console.log(err)
  })
}

export const resetLoading = () => ({
  type: types.RESET_LOADING
})