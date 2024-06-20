import { CREATE_BID_SUCCESS, CREATE_BID_FAIL, SET_MESSAGE } from "./bidTypes";
import bidService from "./bidService";

export const createbid = (price, rider_id, parcel_id) => (dispatch) => {
    console.log(price, rider_id, parcel_id)
  return bidService.createbid(
   price, rider_id, parcel_id).then(
      (response) => {
          response = response.data
          console.log(response)
          if(response.error){
              dispatch({
                  type: CREATE_BID_FAIL,
              });
          
              dispatch({
                  type: SET_MESSAGE,
                  payload: response.message,
                  });
              return Promise.reject();
          }
          dispatch({
              type: CREATE_BID_SUCCESS,
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
          type:CREATE_BID_FAIL,
      });

      dispatch({
          type: SET_MESSAGE,
          payload: message,
      })

      return Promise.reject();
  })
};
