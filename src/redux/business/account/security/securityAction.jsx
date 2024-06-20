import { UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL, SET_MESSAGE, CLEAR_MESSAGE } from "./securityTypes";
import SecurityService from "./securityService";

export const update_password = (oldPassword, newPassword) => (dispatch) => {
    return SecurityService.update_password(oldPassword, newPassword).then(
        (response) => {
            response = response.data
            // console.log(response)
            if(response.error){
                dispatch({
                    type: UPDATE_PASSWORD_FAIL,
                });
            
                dispatch({
                  type: SET_MESSAGE,
                  payload: response.message,
                  });

                  
                return Promise.reject();

               
            }
            dispatch({
                type: UPDATE_PASSWORD_SUCCESS,
                payload: { user: response.data },
            });

            dispatch({
                type: SET_MESSAGE,
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
            type:UPDATE_PASSWORD_FAIL,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: message,
        })

        return Promise.reject();
    })
};
