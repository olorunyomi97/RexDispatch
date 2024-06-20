import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const feedback = (data, business_id) => {
    return axios.post(API_URL  + "/customer/feedback/submit_feedback" ,business_id);
};

const Feedback = {
    feedback
}
export default Feedback;