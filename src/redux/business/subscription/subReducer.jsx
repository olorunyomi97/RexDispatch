import { SUBSCRIPTION_SUCCESS, SUBSCRIPTION_FAIL } from "./subTypes";

// const user = JSON.parse(localStorage.getItem("user"));

// console.log(user)

const initialState = { isLoggedIn: false, user: null };
export default function subscription(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case SUBSCRIPTION_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case SUBSCRIPTION_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        default:
        return state;
    }
}