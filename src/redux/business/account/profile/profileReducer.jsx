import { 
    UPDATE_PROFILE_SUCCESS, 
    UPDATE_PROFILE_FAIL,
    } from "./profileTypes";
  
  const user = JSON.parse(localStorage.getItem("user"));
  
  console.log(user)
  
  const initialState = { isLoggedIn: false, user: null };
  
  export default function license(state = initialState,action) {
      const { type, payload } = action;
  
      switch (type) {
          case UPDATE_PROFILE_SUCCESS:
            return {
              ...state,
              isLoggedIn: true,
              user: payload.user,
            };
          case UPDATE_PROFILE_FAIL:
            return {
              ...state,
              isLoggedIn: false,
              user: null,
            };
  
          default:
          return state;
      }
  }