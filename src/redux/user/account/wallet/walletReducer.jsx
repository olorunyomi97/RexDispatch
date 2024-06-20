import { FUND_WALLET_SUCCESS, FUND_WALLET_FAIL, WITHDRAW_FUNDS_SUCCESS, WITHDRAW_FUNDS_FAIL } from "./walletTypes";

// const user = JSON.parse(localStorage.getItem("user"));

// console.log(user)

const initialState = { isLoggedIn: false, user: null };
export default function wallet(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case FUND_WALLET_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case FUND_WALLET_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
		  };
		  case WITHDRAW_FUNDS_SUCCESS:
			return {
			  ...state,
			  isLoggedIn: true,
			  user: payload.user,
			};
		  case WITHDRAW_FUNDS_FAIL:
			return {
			  ...state,
			  isLoggedIn: false,
			  user: null,
			};
			
        default:
        return state;
    }
}