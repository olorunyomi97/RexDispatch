// define a service to access data
import axios from "axios";
// import authHeader from "./authHeader";

const API_URL = process.env.REACT_APP_API_URL;

const getData = () => {
    return axios.get(API_URL + 'all');
};

const getUser = () => {
    return axios.get(API_URL + 'user'); 
};


export default {
    getData,
    getUser,
};