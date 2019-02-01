import axios from 'axios'

import * as types from './types'

const BASE_PATH = 'http://localhost:8090/'
const SUMMARY = 'summary'
const baseUrl = `${BASE_PATH}${SUMMARY}`

export const getSummary = () => ({
  type: types.GET_SUMMARY,
  promise:  axios.get(`${baseUrl}`)
})

export const getSummaryById = (id, date) => ({
  type: types.GET_SUMMARY_BY_ID,
  promise: axios.get(`${baseUrl}/getByEmail/${id}/${date}`)
})