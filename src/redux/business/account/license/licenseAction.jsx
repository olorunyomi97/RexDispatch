import { SUBMIT_LICENSE_SUCCESS, SUBMIT_LICENSE_FAIL, SET_MESSAGE, CLEAR_MESSAGE } from "./licenseTypes";
import licenseService from "./licenseService";

export const submitlicense = (type,document_number,date_issued,expiry_date) => (dispatch) => {
    return licenseService.submitlicense(
        type,
        document_number,
        date_issued,
        expiry_date,
    ).then(
        (response) => {
            response = response.data
            if(response.error){
                dispatch({
                    type: SUBMIT_LICENSE_FAIL,
                });
            
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.message,
                    });
                return Promise.reject();
            }
            dispatch({
                type: SUBMIT_LICENSE_SUCCESS,
                payload: { user: response },
            });
  
            dispatch({
                type: SET_MESSAGE,
                payload: response.message,
            });
            dispatch({
                type: CLEAR_MESSAGE,
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
                type:SUBMIT_LICENSE_FAIL,
            });
      
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            })
            // dispatch({
            //     type: CLEAR_MESSAGE,
            //     payload: message,
            // })
      
            return Promise.reject();
        })
}