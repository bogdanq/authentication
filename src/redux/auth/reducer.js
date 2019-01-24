import cookies from 'browser-cookies'
import * as types from './types'

const initialState = {
    token: cookies.get('token')
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
                authord: action.payload.data
            }

        case types.SIGN_IN: 
            return {
                ...state
            }

        case types.SIGN_IN_SUCCESS: 
            return {
                ...state,
                userList: action.payload,
                token: action.payload.token
            }
            
        case types.LOG_OUT: 
            return {
                ...state,
                token: undefined             
            }
        
        
        default: return state
    }
}