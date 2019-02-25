import * as types from './types'

const initialState = {
  summarysList: [],
  userSummary: [],
  loadSummary: true,
  isLoadUser: true,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_SUMMARY: 
      return {
        ...state,
        isLoadUser: true
      }

    case types.GET_SUMMARY_SUCCESS: 
      return {
        ...state,
        summarysList: action.payload.data,
        loadSummary: false
      }

    case types.GET_SUMMARY_ERROR: 
      return {
        ...state
      }

    case types.GET_SUMMARY_BY_ID: 
      return {
        ...state
      }

    case types.GET_SUMMARY_BY_ID_ERROR:   
      return {
        ...state
      }

    case types.GET_SUMMARY_BY_ID_SUCCESS:   
      return {
        ...state,
        userSummary: action.payload.summary.slice(),
        isLoadUser: false
      }

    case types.DELETE_SUMMARY: 
      return {
        ...state,
      }
    
    case types.DELETE_SUMMARY_SUCCESS: 
      return {
        ...state,
        summarysList: [...state.summarysList].filter(obj => obj._id !== action.payload.id)
      }

    case types.DELETE_SUMMARY_ERROR: 
      return {
        ...state
      }

    case types.POST_SUMMARY_SUCCESS:
      return {
        ...state,
      }

    case types.POST_SUMMARY_ERROR:
      return {
        ...state,
      }

    case types.POST_SUMMARY:
      return {
        ...state
      }

    case types.PUT_SUMMARY:
      return {
        ...state
      }

    case types.PUT_SUMMARY_SUCCESS:
      return {
        ...state,
      }
        

    case types.RESET_LOADING:
      return {
        ...state,
        isLoadUser: true,
      }
    
    
    default:  return state
  }
}