import { CREATEPARCEL_SUCCESS, CREATEPARCEL_FAIL } from "./parcelTypes";

const user = JSON.parse(localStorage.getItem("user"));

console.log(user)

const initialState = { isLoggedIn: false, user: null };

export default function parcel(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case CREATEPARCEL_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case CREATEPARCEL_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
        default:
        return state;
    }
}