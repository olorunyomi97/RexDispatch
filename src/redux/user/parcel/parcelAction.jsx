import { CREATEPARCEL_SUCCESS, CREATEPARCEL_FAIL, SET_MESSAGE } from "./parcelTypes";
import parcelService from "./parcelService";

export const createparcel = (
    data) => (dispatch) => {
  return parcelService.createparcel(
   data
    ).then(
      (response) => {
          response = response.data
          // console.log(response)
          if(response.error){
              dispatch({
                  type: CREATEPARCEL_FAIL,
              });
          
              dispatch({
                  type: SET_MESSAGE,
                  payload: response.message,
                  });
              return Promise.reject();
          }
          dispatch({
              type: CREATEPARCEL_SUCCESS,
              payload: { user: response },
          });

          dispatch({
              type: SET_MESSAGE,
              // payload: response.data.message,
              payload: response.message,
          });
          return Promise.resolve();
      }
  ).catch((error) => {
      const message = 
      (error.response &&
          error.response.data &&
          error.response.data.message) ||
      error.message ||
      error.toString();

      dispatch({
          type:CREATEPARCEL_FAIL,
      });

      dispatch({
          type: SET_MESSAGE,
          payload: message,
      })

      return Promise.reject();
  })
};
