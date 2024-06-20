import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const createbid = (price, rider_id, parcel_id) => {
    return axios.post(API_URL  + "/business/bid/create_bid" , {
        price,
        rider_id,
        parcel_id
    });
};

const Bid = {
createbid
}

export default Bid;