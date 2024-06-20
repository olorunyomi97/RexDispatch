import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const subscription = (data) => {
    return axios.post(API_URL + "/business/subscription/subscribe", data)     
}
const Subscription = {
    subscription
}
export default Subscription