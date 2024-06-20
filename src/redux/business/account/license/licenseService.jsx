import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const submitlicense = (type,document_number,date_issued,expiry_date) => {
    return axios.post(API_URL  + "/business/verification/add_verification" ,{
        type,
        document_number,
        date_issued,
        expiry_date,
    });
};

const License = {
    submitlicense,
}
export default License;