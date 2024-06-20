import { FEEDBACK_SUCCESS, FEEDBACK_FAIL, SET_MESSAGE, CLEAR_MESSAGE } from "./feedbackTypes";
import feedbackService from "./feedbackService";

export const submit_feedback = ( data) => (dispatch) => {
    return feedbackService.feedback( data).then(
        (response) => {
            response = response.data
            // console.log(response)
            if(response.error){
                dispatch({
                    type: FEEDBACK_FAIL,
                });
            
                dispatch({
                  type: SET_MESSAGE,
                  payload: response.message,
                  });

                  dispatch({
                    type: CLEAR_MESSAGE,
                  });
                return Promise.reject();

               
            }
          //set token 
          //  localStorage.setItem("token", response.token);
            dispatch({
                type: FEEDBACK_SUCCESS,
                payload: { user: response.data },
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
            });

            dispatch({
              type: CLEAR_MESSAGE,
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
            type:FEEDBACK_FAIL,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: message,
        })

        return Promise.reject();
    })
};
