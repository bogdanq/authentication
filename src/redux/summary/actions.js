import axios from 'axios'

import * as types from './types'
import * as userTypes from '../user/types'

import headers from '../../helpers/headers'

const BASE_PATH = 'http://localhost:8090/'
const SUMMARY = 'summary'
const baseUrl = `${BASE_PATH}${SUMMARY}`

export const getSummary = () => ({
  type: types.GET_SUMMARY,
  promise: axios.get(`${baseUrl}`)
})

export const getSummaryById = (id, date) => ({
  type: types.GET_SUMMARY_BY_ID,
  promise: axios.get(`${baseUrl}/getByEmail/${id}/${date}`)
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

export const addSummaryTitle = ({ target }) => dispatch => {
  dispatch({
    type: types.ADD_TITLE_SUMMARY,
    payload: target.value
  })
}

export const addSummaryDescript = ({ target }) => dispatch => {
  dispatch({
    type: types.ADD_DESCRIPT_SUMMARY,
    payload: target.value
  })
}

export const educationTitle = ({target}) => dispatch => {
  dispatch({
    type: types.ADD_EDUCATION_TITLE_SUMMARY,
    payload: {
      id: target.id,
      value: target.value
    }
  })
}

export const cancelEducation = () => dispatch => {
  dispatch({
    type: types.CANCEL_ADD_EDUCATION,
  })
}

export const addEducationList = () => dispatch => {
  dispatch({
    type: types.ADD_EDUCATION_LIST,
  })
}

export const lvlEducation = ({ target }) => dispatch => {
  dispatch({
    type: types.YEAR_EDUCATION,
    payload: {
      num: target.id,
      year: target.value
    }
  })
}

export const addLanguage = () => dispatch => {
  dispatch({
    type: types.ADD_LANGUAGE,
  })
}

export const cancelLanguage = () => dispatch => {
  dispatch({
    type: types.CANCEL_LANGUAGE,
  })
}

export const languageTitle = ({target}) => dispatch => {
  dispatch({
    type: types.ADD_TITLE_LANGUAGE,
    payload: {
      id: target.id,
      value: target.value
    }
  })
}

export const languageDescript = ({target}) => dispatch => {
  dispatch({
    type: types.ADD_DESCRIPT_LANGUAGE,
    payload: {
      id: target.id,
      value: target.value
    }
  })
}

export const phoneAdd = ({ target }) => dispatch => {
  dispatch({
    type: types.ADD_PHONE,
    payload: target.value
  })
}

export const tagsAdd = ({ target }) => dispatch => {
  dispatch({
    type: types.ADD_TAGS,
    payload: target.value
  })
}

export const historyAdd = (history) => dispatch => {
  dispatch({
    type: types.ADD_HISTORY,
    payload: history[1]
  })
}

export const historyDel = () => dispatch => {
  dispatch({
    type: types.DEL_HISTORY
  })
}

export const postSummary = (summary) => dispatch => {
  dispatch({
    type: types.POST_SUMMARY
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
  }, err => {
      console.log(err)
  })
}