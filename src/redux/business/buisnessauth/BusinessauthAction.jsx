import { 
  BUSINESS_REGISTRATION_SUCCESS, 
  BUSINESS_REGISTRATION_FAIL, 
  BUSINESS_VERIFICATION_SUCCESS, 
  BUSINESS_VERIFICATION_FAIL, 
  REVERIFY_BUSINESS_SUCCESS,
  REVERIFY_BUSINESS_FAIL,
  SET_MESSAGE,
  CLEAR_MESSAGE } from "./Businessauthtypes";

import BusinessauthService from "./BusinessauthService";

export const businessregistration = (businessname, email, location, phone, address,  password) => (dispatch) => {
return BusinessauthService.businessregistration(businessname, email, location, phone, address, password).then(
    (response) => {
        response = response.data
        if(response.error){
            dispatch({
              type: BUSINESS_REGISTRATION_FAIL,
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
        // localStorage.setItem("token", response.token);
        dispatch({
            type: BUSINESS_REGISTRATION_SUCCESS,
            payload: { business: response },
        });

        dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
            // payload: response.message,
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
            type:BUSINESS_REGISTRATION_FAIL,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: message,
        })

        return Promise.reject();
    })
    };


export const businessverification = (otp,phone) => (dispatch) => {
return BusinessauthService.businessverification(otp,phone).then(
  (data) => {

      if(data.error){
        dispatch({
            type: BUSINESS_VERIFICATION_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: data.message,
          });
          return Promise.reject();
      }
    dispatch({
      type: BUSINESS_VERIFICATION_SUCCESS,
      payload: { user: data },
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
      type: BUSINESS_VERIFICATION_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
})
};

export const reverifybusiness = (phone) => (dispatch) => {
return BusinessauthService.reverifybusiness(phone).then(
  (data) => {

      if(data.error){
        dispatch({
            type: REVERIFY_BUSINESS_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: data.message,
          });
          return Promise.reject();
      }
    dispatch({
      type: REVERIFY_BUSINESS_SUCCESS,
      payload: { user: data },
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
      type: REVERIFY_BUSINESS_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
})
};

