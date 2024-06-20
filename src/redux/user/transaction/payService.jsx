import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// const pay = (data) => {
//     return axios.post(API_URL + "/user/transactions/initialize_transaction?user=customer", data)     
// }

const pay = (data) => {
    return axios.patch(API_URL + "/parcel/complete_parcel_process", data)     
}
// const pay = (bid_id, parcel_id ,gateway_response ,payment_channel, payment_ref) => {
//     return axios.patch(API_URL + "/parcel/complete_parcel_process", {
//         bid_id,
//         parcel_id,
//         gateway_response : `Response`,
//         payment_channel : `Paystack`,
//         payment_ref :`T${Date.now().toString()}`,

//     })     
// }
const ParcelPayment = {
    pay
}
export default ParcelPayment

