import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const updateprofile = (data) => {
    return axios.patch(API_URL + "/customer/update_user", data )
}

const Profile = {
    updateprofile
}

export default Profile;