import { GET_PROFILE_SUCCESS, GET_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE, SET_MESSAGE } from "./profileTypes";
import profileService from "./profileService";


export const getprofile = () => async (dispatch) => {
    try {
      const res = await profileService.getprofile();
  
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

//   export const updateprofile = (id, data) => async (dispatch) => {
//     try {
//       const res = await profileService.updateprofile(id, data);
//         console.log(res)
//       dispatch({
//         type: UPDATE_PROFILE_SUCCESS,
//         payload: data,
//       });
//       dispatch({
//         type: SET_MESSAGE,
//         payload: res.message,
//        });
  
//       return Promise.resolve(res.data);
//     } catch (err) {
//       return Promise.reject(err);
//     }
//   };

export const updateprofile = (id, data) => (dispatch) => {
    return profileService.updateprofile(id, data)
    .then(
        (response) => {
            response = response.data
            if(response.error){
                dispatch({
                    type: UPDATE_PROFILE_FAIL,
                });
            
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                    });
                return Promise.reject();
            }
            dispatch({
                type: UPDATE_PROFILE_SUCCESS,
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
                type:UPDATE_PROFILE_FAIL,
            });
      
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            })
      
            return Promise.reject();
        })
}