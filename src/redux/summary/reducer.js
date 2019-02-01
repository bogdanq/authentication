import * as types from './types'

const initialState = {
  summarysList: [],
  userSummary: [],
  loadSummary: true,
  isLoadUser: true
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
        summarysList: action.payload,
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
        userSummary: action.payload.summary,
        isLoadUser: false
      }
      
      default:  return state
  }

}