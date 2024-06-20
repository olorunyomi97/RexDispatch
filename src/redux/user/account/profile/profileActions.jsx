import { UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, SET_MESSAGE } from "./profileTypes";
import profileService from "./profileService"

export const updateprofile = (id, data) => (dispatch) => {
    return profileService.updateprofile(id,data)
    .then(
           (response) => {
               response = response.data
               // console.log(response)
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