import * as types from './types'

const initialState = {
  summarysList: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_SUMMARY: 
      return {
        ...state,
        summarysList: action.payload
      }

      default:  return state
  }

}