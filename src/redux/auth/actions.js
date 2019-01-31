import axios from 'axios'
import cookies from 'browser-cookies'

import * as types from './types'
import headers from '../../helpers/headers'

const BASE_PATH = 'http://localhost:8090/'
const USERS = 'users'
const baseUrl = `${BASE_PATH}${USERS}`

export const signUp = (email, pas, firstName, lastName ) => ({
  type: types.SIGN_UP,
  promise: axios.post(`${baseUrl}/signup`, {
    email: email,
    password: pas,
    firstName: firstName,
    lastName: lastName
  })
})

export const signIn = (email, pass) => ({
  type: types.SIGN_IN,
  promise: axios.post(`${baseUrl}/signin`, {
    email: email,
    password: pass
  })
})

export const logOut = () => {
  cookies.erase('token')
}

export const getUser = () => ({
  type: 'GET_USER',
  promise: axios.get(`${baseUrl}/current-user`, headers)
})