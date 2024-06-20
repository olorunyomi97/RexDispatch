import {
    BUSINESS_REGISTRATION_SUCCESS,
    BUSINESS_REGISTRATION_FAIL,
    BUSINESS_VERIFICATION_SUCCESS,
    BUSINESS_VERIFICATION_FAIL,
  } from "./Businessauthtypes";
  
  // const user = JSON.parse(localStorage.getItem("user"));
  const initialState = { isLoggedIn: false, user: null };
  // console.log(user)
  export default function BusinessauthReducer(state = initialState,action) {
      const { type, payload } = action;
  
      switch (type) {
          case BUSINESS_REGISTRATION_SUCCESS:
            return {
              ...state,
              isLoggedIn: false,
              user: payload.user,
            };
          case BUSINESS_REGISTRATION_FAIL:
            return {
              ...state,
              isLoggedIn: false,
            };
          case BUSINESS_VERIFICATION_SUCCESS:
            return {
              ...state,
              isLoggedIn: false,
            };
          case BUSINESS_VERIFICATION_FAIL:
            return {
              ...state,
              isLoggedIn: false,
            };
          default:
            return state;
      }
  }