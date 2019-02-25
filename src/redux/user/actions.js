import axios from 'axios'

import * as types from './types'
import { UserEmail } from '../../helpers/headers'

const BASE_PATH = 'http://localhost:8080/'
const SUMMARY = 'users'
const baseUrl = `${BASE_PATH}${SUMMARY}`

export const getUserSummary = email => ({
  type: types.GET_USER_SUMMARY,
  promise: axios.get(`${baseUrl}/summaries`, UserEmail(email))
})