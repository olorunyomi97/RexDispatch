import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
// Authentication //
const businessregistration = (business_name, location, phone, email, address, password, license) => {
    // console.log(business_name, location, phone, email, address, password, license)
    return axios.post(API_URL  + "/business/sign_up" , {
        business_name, 
        location, 
        phone:`+${phone}`,
        email,
        address, 
        password,
        license,
    });
};

// const updatebusiness = ()

const businessverification = (otp,phone) => {
    return axios.patch(API_URL + "/business/verify" ,{
        otp,
        phone:`+${phone}`,
    })
    
};
const reverifybusiness = (phone) => {
    return axios.post(API_URL + "/business/resend_otp" ,{
        phone:`+${phone}`
    })
    // .then((response) => {
    //     if (response.data.accessToken) {
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //     }
  
    //     return response.data;
    // });
    
};


const Business = {
    businessregistration,
    businessverification,
    reverifybusiness,
}
export default Business;
