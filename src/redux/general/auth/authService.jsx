import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
// Authentication //
const register = (firstname, lastname, email, phone, password) => {
    return axios.post(API_URL  + "/customer/sign_up" , {
        firstname,
        lastname,
        email,
        phone:`+${phone}`,
        password,
    });
};


const verification = (otp, phone) => {
    console.log(phone)
    return axios.patch(API_URL + "/customer/verify" ,{
        otp,
        phone:`+${phone}`,
    })
   
    
    
};
const reverify = (phone) => {
    return axios.post(API_URL + "/customer/resend_otp" ,{
        phone:`+${phone}`
    })
    
};

const login = (phone, password, user_category) => {
    return axios.post(API_URL + `/auth/sign_in?model=${user_category}`, {
        phone:`+${phone}`,
        password, 
    })
};

const logout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
};

const forgotpassword = (phone, user_category) => {
    return axios.post(API_URL + `/auth/forgot_password?model=${user_category}`, {
        phone:`+${phone}`, 
    })
};
const resetpassword = (phone,token, password, user_category) => {
    return axios.post(API_URL + `/auth/reset_password?model=${user_category}`, {
        phone:`+${phone}`, 
        token,
        password,
    })
};

const Authentication = {
    register,
    verification,
    reverify,
    login,  
    logout,
    forgotpassword,
    resetpassword,
}
export default Authentication;
