import * as types from "./types";

const initialState = {
  user: {},
  loading: true,
  authError: "",
  isLoad: false
};

const toggle = (list, id) => {
  let index = list.indexOf(id);
  return index === -1 ? list.concat(id) : list.filter(item => item !== id)
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        authError: ""
      };

    case types.SIGN_UP_SUCCESS:
      return {
        ...state
      };

    case types.SIGN_UP_ERROR:
      return {
        ...state,
        authError: "Логин занят"
      };

    case types.SIGN_IN:
      return {
        ...state,
        authError: "",
        isLoad: true
      };

    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        authError: "",
        isLoad: false
      };

    case types.SIGN_IN_ERROR:
      return {
        ...state,
        authError: "Неверный логин или пароль",
        isLoad: false
      };

    case types.LOG_OUT:
      return {
        ...state
      };

    case types.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    case types.GET_USER:
      return {
        ...state,
        user: {}
      };

    case types.GET_USER_ERROR:
      return {
        ...state,
        user: {},
        loading: false
      };

    case types.TOGGLE_FAVORITE: {
      return {
        ...state
      };
    }

    case types.TOGGLE_FAVORITE_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          favoriteSummry: toggle(state.user.favoriteSummry, action.payload)
        }
      };
    }

    default:
      return state;
  }
}
