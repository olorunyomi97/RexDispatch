import { PAY_FAIL, SET_MESSAGE } from "./payTypes";
import payService from "./payService";

export const pay = (data) => (dispatch) => {
  return payService.pay(data).then(
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
          type:PAY_FAIL,
      });

      dispatch({
          type: SET_MESSAGE,
          payload: message,
      })

      return Promise.reject();
  })
};
