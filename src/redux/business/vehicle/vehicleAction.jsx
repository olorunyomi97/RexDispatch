import { 
    REGISTER_VEHICLE_SUCCESS, 
    REGISTER_VEHICLE_FAIL,
    UPDATE_VEHICLE_SUCCESS, 
    UPDATE_VEHICLE_FAIL,
    UPDATE_VEHICLE,
    DELETE_VEHICLE,
    SET_MESSAGE } from "./vehicleTypes";
import vehicleService from "./vehicleService";

export const registervehicle = (data) => (dispatch) => {
  return vehicleService.registervehicle(
   data
    ).then(
      (response) => {
          response = response.data
          // console.log(response)
          if(response.error){
              dispatch({
                  type: REGISTER_VEHICLE_FAIL,
              });
          
              dispatch({
                  type: SET_MESSAGE,
                  payload: response.message,
                  });
              return Promise.reject();
          }
          dispatch({
              type: REGISTER_VEHICLE_SUCCESS,
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
          type:REGISTER_VEHICLE_FAIL,
      });

      dispatch({
          type: SET_MESSAGE,
          payload: message,
      })

      return Promise.reject();
  })
};

// export const updatevehicle = (id, data) => async (dispatch) => {
//     try {
//       const res = await vehicleService.updatevehicle(id, data);
//         console.log(res)
//       dispatch({
//         type: UPDATE_VEHICLE,
//         payload: data,
//       });
//       dispatch({
//         type: SET_MESSAGE,
//         payload: res.message,
//       });
  
//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };

  export const updatevehicle = (id, data) => (dispatch) => {
    return vehicleService.updatevehicle(id, data)
    .then(
        (response) => {
            response = response.data
            if(response.error){
                dispatch({
                    type: UPDATE_VEHICLE_FAIL,
                });
            
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                    });
                return Promise.reject();
            }
            dispatch({
                type: UPDATE_VEHICLE_SUCCESS,
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
                type:UPDATE_VEHICLE_FAIL,
            });
      
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            })
      
            return Promise.reject();
        })
}


  
  export const deletevehicle = (id) => async (dispatch) => {
    try {
      await vehicleService.removevehicle(id);
  
      dispatch({
        type: DELETE_VEHICLE,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };