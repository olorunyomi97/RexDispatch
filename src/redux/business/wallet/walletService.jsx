import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const addfunds = (data) => {
    return axios.post(API_URL + "/general/transactions/top_up?model=business", data)
}
const withdrawfunds = (data) => {
    return axios.post(API_URL + "/general/transactions/withdrawal?model=business", data)
}

const Wallet = {
    addfunds,
    withdrawfunds
}

export default Wallet;