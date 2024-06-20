import { 
        REGISTER_SUCCESS,
        REGISTER_FAIL,
        VERIFICATION_SUCCESS,
        VERIFICATION_FAIL,
        REVERIFY_SUCCESS,
        REVERIFY_FAIL,
        LOGIN_SUCCESS,
        LOGIN_FAIL,
        LOGOUT,
        FORGOT_PASSWORD_SUCCESS,
        FORGOT_PASSWORD_FAIL,
        RESET_PASSWORD_SUCCESS,
        RESET_PASSWORD_FAIL,
        SET_MESSAGE,
        CLEAR_MESSAGE } from "./Authtypes";
import AuthService from "./authService";

export const register = (firstname, lastname, email, phone, password) => (dispatch) => {
    return AuthService.register(firstname, lastname, email, phone, password).then(
        (response) => {
            response = response.data
            // console.log(response)
            if(response.error){
                dispatch({
                    type: REGISTER_FAIL,
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
                type: REGISTER_SUCCESS,
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
            type:REGISTER_FAIL,
        });

        dispatch({
            type: SET_MESSAGE,
            payload: message,
        })

        return Promise.reject();
    })
};

export const login = (phone, password, user_category) => (dispatch) => {
    return AuthService.login(phone, password, user_category).then(
      (data) => {
          data = data.data
          if(data.error){
            dispatch({
                type: LOGIN_FAIL,
              });
        
              dispatch({
                type: SET_MESSAGE,
                payload: data.message,
              });
              return Promise.reject();
          }
          //set token 
        localStorage.setItem("token", data.token);
        localStorage.setItem("authUser", JSON.stringify(data.data));

        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data.data },
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
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
    })
};

export const verification = (otp, phone) => (dispatch) => {
    return AuthService.verification(otp, phone).then(
      (data) => {
            data = data.data
          if(data.error){
            dispatch({
                type: VERIFICATION_FAIL,
              });
        
              dispatch({
                type: SET_MESSAGE,
                payload: data.message,
              });
              return Promise.reject();
              
          }
        dispatch({
          type: VERIFICATION_SUCCESS,
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
          type: VERIFICATION_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
    })
};

export const reverify = (phone) => (dispatch) => {
    return AuthService.reverify(phone).then(
      (data) => {

          if(data.error){
            dispatch({
                type: REVERIFY_FAIL,
              });
        
              dispatch({
                type: SET_MESSAGE,
                payload: data.message,
              });
              return Promise.reject();
          }
        dispatch({
          type: REVERIFY_SUCCESS,
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
          type: REVERIFY_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
    })
};

export const forgotpassword = (phone, user_category) => (dispatch) => {
  return AuthService.forgotpassword(phone, user_category).then(
    (data) => {

        if(data.error){
          dispatch({
              type: FORGOT_PASSWORD_FAIL,
            });
      
            dispatch({
              type: SET_MESSAGE,
              payload: data.message,
            });
            return Promise.reject();
        }
      dispatch({
        type: FORGOT_PASSWORD_SUCCESS,
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
        type: FORGOT_PASSWORD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
  })
};

export const resetpassword = (phone, token,password, user_category) => (dispatch) => {
  return AuthService.resetpassword(phone,token, password, user_category).then(
    (data) => {

        if(data.error){
          dispatch({
              type: RESET_PASSWORD_FAIL,
            });
      
            dispatch({
              type: SET_MESSAGE,
              payload: data.message,
            });
            return Promise.reject();
        }
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
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
        type: RESET_PASSWORD_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
  })
};


export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};