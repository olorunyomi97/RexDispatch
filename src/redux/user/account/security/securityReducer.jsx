import { UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL } from "./securityTypes";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user)

const initialState = { isLoggedIn: false, user: null };

export default function update_password(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_PASSWORD_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
            user: payload.user,
          };
        case UPDATE_PASSWORD_FAIL:
          return {
            ...state,
            isLoggedIn: false,
          };
          default:
          return state;
    }
}