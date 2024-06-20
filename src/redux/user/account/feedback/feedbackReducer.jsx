import { FEEDBACK_SUCCESS, FEEDBACK_FAIL } from "./feedTypes";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user)

const initialState = { 
  isLoggedIn: false, 
  user: null,
  loading: true
};

export default function feedback(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case FEEDBACK_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
            user: payload.user,
            loading: false
          };
        case FEEDBACK_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
          default:
          return state;
    }
}