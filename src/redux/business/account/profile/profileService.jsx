import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const getprofile = (data) => {
    return axios.get(API_URL  + "/business/business_profile" ,data)
};

const updateprofile = (data) => {
    return axios.patch(API_URL  + "/business/update_user" ,data)
};

const Profile = {
    getprofile,
    updateprofile,
}
export default Profile;