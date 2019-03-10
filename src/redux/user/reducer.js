import * as types from "./types";

const initialState = {
  userPrivateSummary: [],
  isLoading: true
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_SUMMARY:
      return {
        ...state
      };

    case types.GET_USER_SUMMARY_SUCCESS:
      return {
        ...state,
        userPrivateSummary: action.payload.data,
        isLoading: false
      };

    case types.GET_USER_SUMMARY_ERROR:
      return {
        ...state
      };

    case types.DELETE_SUMMARY:
      return {
        ...state
      };

    case types.DELETE_SUMMARY_SUCCESS:
      return {
        ...state,
        userPrivateSummary: [...state.userPrivateSummary].filter(
          obj => obj._id !== action.payload.id
        )
      };

    case types.DELETE_SUMMARY_ERROR:
      return {
        ...state
      };

    default:
      return state;
  }
}
