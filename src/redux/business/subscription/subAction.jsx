import { SUBSCRIPTION_FAIL, SET_MESSAGE } from "./subTypes";
import subService from "./subService";

export const subscription = (data) => (dispatch) => {
  return subService.subscription(data).then(
      (response) => {
          response = response.data
            if(response.error){
              dispatch({
                  type: SET_MESSAGE,
                  payload: response.message,
                  });
              return Promise.reject();
            }
            //set token 

          dispatch({
              type: SET_MESSAGE,
              // payload: response.data.message,
              payload: response.message,
          });
          return Promise.resolve();
        })
        .catch((error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

            dispatch({
                type:SUBSCRIPTION_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            })

            return Promise.reject();
        })
};
