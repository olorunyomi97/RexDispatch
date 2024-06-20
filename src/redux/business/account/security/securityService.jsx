import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const update_password = (oldPassword, newPassword) => {
    return axios.patch(API_URL  + "/business/change_password" , {
        oldPassword,
        newPassword,
    });
};

const Password = {
    update_password,
}
export default Password;