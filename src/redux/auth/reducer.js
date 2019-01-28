import cookies from 'browser-cookies'
import * as types from './types'

const initialState = {
  token: Number(cookies.get('token')),
  userList: {},
  loadToken: true,
  authord: false
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SIGN_UP: 
      return {
        ...state
      }

    case types.SIGN_UP_SUCCESS: 
      return {
        ...state,
        authord: true
      }

    case types.SIGN_IN: 
      return {
        ...state
      }

    case types.SIGN_IN_SUCCESS: 
      return {
        ...state,
        userList: action.payload.data,
        token: action.payload.token,
        loadToken: false
      }
        
    case types.LOG_OUT: 
      return {
        ...state,
        token: null             
      }

    case types.GET_USER: 
      return {
        ...state,
        userList: action.payload,
        loadToken: false
      }

    case types.GET_TOKEN:
      return {
        ...state,
        token: Number(cookies.get('token'))
      }

    default: return state
  }
}