import * as types from './types'

const initialState = {
  user: {},
  authord: false,
  loading: true
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SIGN_UP: 
      return {
        ...state,
        authord: true
      }

    case types.SIGN_UP_SUCCESS: 
      return {
        ...state
      }

    case types.SIGN_IN: 
      return {
        ...state
      }

    case types.SIGN_IN_SUCCESS: 
      return {
        ...state,
        user: action.payload.data
      }
        
    case types.LOG_OUT: 
      return {
        ...state          
      }

    case types.GET_USER_SUCCESS: 
      return {
        ...state,
        user: action.payload,
        authord: true,
        loading: false
      }
    case types.GET_USER: 
      return {
        ...state,
        user: {}
      }

    case types.GET_USER_ERROR: 
      return {
        ...state,
        user: {},
        loading: false
      }

    default: return state
  }
}