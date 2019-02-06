import * as types from './types'

const initialState = {
  summarysList: [],
  userSummary: [],
  loadSummary: true,
  isLoadUser: true,
  summaryAdd: {
    title: '',
    phone: '',
    description: '',
    tags: [],
    history: [],
    education: [],
    language: [],
  },
  count: 1,
  countLanguage: 1,
  isComplete: false
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
        userSummary: action.payload.summary,
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

    case types.ADD_TITLE_SUMMARY:
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          title: action.payload
        }  
      }

    case types.ADD_DESCRIPT_SUMMARY:
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          description: action.payload
        }  
      }
      
    case types.ADD_EDUCATION_TITLE_SUMMARY:
      const { id, value } = action.payload
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          education: [...state.summaryAdd.education.filter(obj => obj.id !== id), { id, institution: value }]
        }
      }

    case types.ADD_EDUCATION_LIST:
      return {
        ...state,
        count: state.count + 1
      }

    case types.CANCEL_ADD_EDUCATION:
      return {
        ...state,
        count: state.count - 1,
        summaryAdd: {
          ...state.summaryAdd,
          education: [...state.summaryAdd.education.slice(0, -1)]
        }
      }

    case types.YEAR_EDUCATION:
      const { num, year } = action.payload
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          education: [...state.summaryAdd.education.map(obj =>
            obj.id === num ? { ...obj, year } : obj
          )]
        }
      }

    case types.ADD_LANGUAGE:
      return {
        ...state,
        countLanguage: state.countLanguage + 1
      }

    case types.CANCEL_LANGUAGE:
      return {
        ...state,
        countLanguage: state.countLanguage - 1,
        summaryAdd: {
          ...state.summaryAdd,
          language: [...state.summaryAdd.language.slice(0, -1)]
        }
      }

    case types.ADD_TITLE_LANGUAGE:
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          language: [...state.summaryAdd.language.filter(obj => 
            obj.id !== action.payload.id), { id: action.payload.id, title: action.payload.value 
          }]
        }
      }

    case types.ADD_DESCRIPT_LANGUAGE:
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          language: [...state.summaryAdd.language.map(obj =>
            obj.id === action.payload.id ? { ...obj, description: action.payload.value } : obj
          )]
        }
      }

    case types.ADD_PHONE:
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          phone: action.payload
        }
      }

    case types.ADD_TAGS:
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          tags: [...state.summaryAdd.tags, ...action.payload.split(',')]
        }
      }

    case types.ADD_HISTORY:
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          history: [...state.summaryAdd.history, action.payload]
        }
      }

    case types.DEL_HISTORY:
      return {
        ...state,
        summaryAdd: {
          ...state.summaryAdd,
          history: [...state.summaryAdd.history.slice(0, -1)]
        }
      }

    case types.POST_SUMMARY_SUCCESS:
      return {
        ...state,
        isComplete: true
      }
    
    
    default:  return state
  }
}