import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAIL,
  REVERIFY_SUCCESS,
  REVERIFY_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  LOGOUT,
} from "./Authtypes";

const authUser = JSON.parse(localStorage.getItem("authUser"));
// console.log(user)

const initialState = { isLoggedIn: false, user: null };

export default function auth(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
            user: payload.user,
          };
        case REGISTER_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
        case VERIFICATION_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            // user: payload.user,
          };
        case VERIFICATION_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
          case REVERIFY_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
          };
        case REVERIFY_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
        case LOGIN_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case LOGIN_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        case LOGOUT:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        case FORGOT_PASSWORD_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            // user: payload.user,
          };
        case FORGOT_PASSWORD_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
          case RESET_PASSWORD_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            // user: payload.user,
          };
        case RESET_PASSWORD_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
        default:
          return state;
    }
}