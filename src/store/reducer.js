import {
  USER,
  LOGIN_STATE,
  SIGN_UP,
  ERROR,
  REMOVE_ERROR,
  LOGOUT,
  DIALOG
} from "./constant";

const initialState = {
  user: { } || null,
  login: false,
  signUp: false,
  message: null,
  dialog: false,
  error: false
};

const onUser = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      }
    case LOGIN_STATE:
      return {
        ...state,
        login: !state.login
      }
    case SIGN_UP:
      return {
        ...state,
        signUp: !state.signUp
      }
    case ERROR:
      return {
        ...state,
        error: true,
        message: action.payload
      }
    case REMOVE_ERROR:
      return {
        ...state,
        error: false,
        message: null
      }
    case LOGOUT:
      return {
        ...state,
        user: {} || null
      }
    case DIALOG:
      return {
        ...state,
        dialog: !state.dialog
      }
    default:
      return {
        ...state
      };
  }
};

export default onUser;
