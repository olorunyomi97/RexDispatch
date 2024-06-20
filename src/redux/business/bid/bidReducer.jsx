import { CREATE_BID_SUCCESS, CREATE_BID_FAIL } from "./bidTypes";

const user = JSON.parse(localStorage.getItem("user"));

console.log(user)

const initialState = { isLoggedIn: false, user: null };

export default function bid(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_BID_SUCCESS:
            return {
              ...state,
              isLoggedIn: false,
              user: payload.user,
            };
          case CREATE_BID_FAIL:
            return {
              ...state,
              isLoggedIn: false,
              user: null,
            }; 
        default:
        return state;
    }
}
