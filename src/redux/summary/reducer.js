import * as types from "./types";

const initialState = {
  summarysList: [],
  userSummary: {},
  loadSummary: true,
  isLoadUser: true,
  status: null,
  search: [],
  pagination: [],
  countElements: '5'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SUMMARY:
      return {
        ...state,
        isLoadUser: true,
        loadSummary: true
      };

    case types.GET_SUMMARY_SUCCESS:
      return {
        ...state,
        summarysList: action.payload.data,
        loadSummary: false,
        pagination: action.payload
      };

    case types.GET_SUMMARY_ERROR:
      return {
        ...state
      };

    case types.GET_SUMMARY_BY_ID:
      return {
        ...state
      };

    case types.GET_SUMMARY_BY_ID_ERROR:
      return {
        ...state
      };

    case types.GET_SUMMARY_BY_ID_SUCCESS:
      return {
        ...state,
        userSummary: action.payload.summary,
        isLoadUser: false
      };

    case types.DELETE_SUMMARY:
      return {
        ...state,
        status: action.payload
      };

    case types.DELETE_SUMMARY_SUCCESS:
      return {
        ...state,
        summarysList: [...state.summarysList].filter(
          obj => obj._id !== action.payload.id
        ),
        status: null
      };

    case types.DELETE_SUMMARY_ERROR:
      return {
        ...state,
        status: null
      };
    case types.POST_SUMMARY:
      return {
        ...state,
        status: true
      };

    case types.POST_SUMMARY_SUCCESS:
      return {
        ...state,
        status: false
      };

    case types.POST_SUMMARY_ERROR:
      return {
        ...state,
        status: false
      };

    case types.PUT_SUMMARY:
      return {
        ...state,
        status: true
      };

    case types.PUT_SUMMARY_SUCCESS:
      return {
        ...state,
        status: false
      };

    case types.PUT_SUMMARY_ERROR:
      return {
        ...state,
        status: false
      };

      
    case types.PUT_COMMENT:
      return {
        ...state
    };

    case types.PUT_COMMENT_SUCCESS:
      return {
        ...state,
        userSummary: {
          ...state.userSummary,
          comments: [...state.userSummary.comments, action.payload.data]
        }
    };

    case types.DELETE_COMMENT:
      return {
        ...state,
        status: action.payload
    };

    case types.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        userSummary: {
          ...state.userSummary,
          comments: [...state.userSummary.comments].filter(
            obj => obj._id !== action.payload.data
          )
        },
        status: null
    };
    
    case types.SEARCH_SUMMARY:
      return {
        ...state,
    };

    case types.SEARCH_SUMMARY_SUCCESS:
      return {
        ...state,
        search: action.payload.data
    };
    
    case types.RESET_LOADING:
      return {
        ...state,
        isLoadUser: true
      };
    
    case types.SEARCH_LIST:
      return {
        ...state,
        summarysList: state.search
      };

    case types.SEARCH_LIST_SUCCESS:
      return {
        ...state,
        summarysList: state.search
    };
    
    case types.GET_COUNT_ELEMENTS:
      return {
        ...state,
        countElements: action.payload
      }
    
    default:
      return state;
  }
}
