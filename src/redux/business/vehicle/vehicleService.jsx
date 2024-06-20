import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

    const registervehicle = (data) => {
        return axios.post(API_URL + "/business/dispatcher/create_dispatcher", data)   
    }   

    // const getvehicle = id => {
    //     return axios.get(`/business/dispatcher/get_single_dispatcher/${id}`);
    //   };

    const updatevehicle = (id, data) => {
        return axios.patch(API_URL + `/business/dispatcher/update_dispatcher/${id}`, data);
    };
      
      
    const Vehicle = {
        registervehicle,
        updatevehicle,
        // removevehicle,
        // getvehicle
    }
export default Vehicle;