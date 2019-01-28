import axios from 'axios'
import cookies from 'browser-cookies'

import * as types from './types'

const BASE_PATH = 'http://localhost:8080/'
const USERS = 'users'


export const signUp = (email, pas, firstName, lastName) => async dispatch => {
  try {
    dispatch({
      type: types.SIGN_UP
    })

    const res = await axios.post(`${BASE_PATH}${USERS}/signup`, {
      email: email,
      password: pas,
      firstName: firstName,
      lastName: lastName
  })

    dispatch({
      type: types.SIGN_UP_SUCCESS,
      payload: res.data
    }) 
  } catch(e) {
      console.log(e)
  }
}

export const signIn = (email, pass) => async dispatch => {
  try {
    dispatch({
        type: types.SIGN_IN
    })
    
    const res = await axios.post(`${BASE_PATH}${USERS}/signin`, {
        email: email,
        password: pass
    })

    cookies.set('token', String(res.data.token))        
    dispatch({
        type: types.SIGN_IN_SUCCESS,
        payload: res.data
    })  
  } catch(e) {
      console.log('signIn', e)
  }
}

export const logOut = () => {
  cookies.erase('token')
}

export const getUser = () => async dispatch => {
  const res = await axios.get('http://localhost:8080/users/current-user', {
    headers: {'Authorization': cookies.get('token')}
  })
  await dispatch({
    type: types.GET_USER,
    payload: res.data
  })
}

export const getToken = () => {
  return {
    type: types.GET_TOKEN
  }
}