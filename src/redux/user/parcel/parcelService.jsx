import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const createparcel = (data) => {
    return axios.post(API_URL + "/parcel/create_parcel", data)
}

// const deliverparcel = (data) => {
//     return axios.post(API_URL + "/parcel/create_parcel", data)
// }
    
const Parcel = {
    createparcel,
    // deliverparcel
}
export default Parcel;