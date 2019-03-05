import * as types from './types'

const initialState = {
  user: {},
  loading: true,
  authError: ''
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.SIGN_UP: 
      return {
        ...state
      }

    case types.SIGN_UP_SUCCESS: 
      return {
        ...state
      }

    case types.SIGN_IN: 
      return {
        ...state,
        authError: '',
      }

    case types.SIGN_IN_SUCCESS: 
      return {
        ...state,
        user: action.payload.data,
        authError: ''
      }

    case types.SIGN_IN_ERROR: 
      return {
        ...state,
        authError: 'Неверный логин или пароль'
      }
        
    case types.LOG_OUT: 
      return {
        ...state          
      }

    case types.GET_USER_SUCCESS: 
      return {
        ...state,
        user: action.payload,
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