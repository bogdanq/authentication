import axios from 'axios'

import * as types from './types'

const BASE_PATH = 'http://localhost:8080/'
const SUMMARY = 'summary'
const baseUrl = `${BASE_PATH}${SUMMARY}`

export const getSummary = () => async dispatch => {
  const res = await axios.get(`${baseUrl}`)
  dispatch({
    type: types.GET_SUMMARY,
    payload: res.data.data    
  })
}