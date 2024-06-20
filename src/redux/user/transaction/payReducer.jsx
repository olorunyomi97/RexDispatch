import { PAY_SUCCESS, PAY_FAIL } from "./subTypes";

// const user = JSON.parse(localStorage.getItem("user"));

// console.log(user)

const initialState = { isLoggedIn: false, user: null };
export default function pay(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case PAY_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case PAY_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        default:
        return state;
    }
}