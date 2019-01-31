import * as types from './types'

const initialState = {
  summarysList: [],
  userSummary: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_SUMMARY: 
      return {
        ...state,
        summarysList: action.payload
      }

    case types.GET_SUMMARY_BY_ID: 
      return {
        ...state,
        userSummary: action.payload
      }

      default:  return state
  }

}