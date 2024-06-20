import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

    const fundwallet = (data) => {
        return axios.post(API_URL + "/general/transactions/top_up?model=customer", data)     
    }

    const withdrawfunds = (data) => {
        return axios.post(API_URL + "/general/transactions/withdrawal?model=customer", data)
    }

    const Wallet = {
        fundwallet,
        withdrawfunds
    }
export default Wallet