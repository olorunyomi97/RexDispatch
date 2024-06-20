import { FUND_WALLET_FAIL,WITHDRAW_FUNDS_FAIL, SET_MESSAGE } from "./walletTypes";
import walletService from "./walletService";

export const fundwallet = (data) => (dispatch) => {
    return walletService.fundwallet(data).then(
        (response) => {
          response = response.data
            if(response.error){
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                });
                return Promise.reject();
            }
            dispatch({
                type: SET_MESSAGE,
                payload: response.message,
            });
            return Promise.resolve();
        }
    )
    .catch((error) => {
      const message = 
      (error.response &&
          error.response.data &&
          error.response.data.message) ||
      error.message ||
      error.toString();

      dispatch({
          type:FUND_WALLET_FAIL,
      });

      dispatch({
          type: SET_MESSAGE,
          payload: message,
      })

      return Promise.reject();
  })
};



export const withdrawfunds = (data) => (dispatch) => {
    return walletService.withdrawfunds(data).then(
      (response) => {
          response = response.data
            if(response.error){
              dispatch({
                  type: SET_MESSAGE,
                  payload: response.message,
                  });
              return Promise.reject();
          }
          dispatch({
              type: SET_MESSAGE,
              payload: response.message,
          });
          return Promise.resolve();
        }
    )
    .catch((error) => {
        const message = 
        (error.response && //error here//
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString();

        dispatch({
            type:WITHDRAW_FUNDS_FAIL,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: message,
        })

        return Promise.reject();
    })
};
