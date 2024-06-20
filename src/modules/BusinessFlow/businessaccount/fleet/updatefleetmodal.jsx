import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {updatevehicle} from "../../../../redux/business/vehicle/vehicleAction"
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { Modal } from "react-bootstrap";

const Updatefleetmodal = (props, data) => {
    const {fleet_id } = props
    const form = useRef();
    const checkBtn = useRef();
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const history = useHistory();

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const [update, setUpdate] = useState([])
    console.log(fleet_id)

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(API_URL + '/business/dispatcher/get_single_dispatcher/' + fleet_id, data)
        .then(data => {
            console.log(data.data.data);
            setUpdate(data.data.data)
        })
    },[data, API_URL])

    const [new_data, setNew_data] = useState({})
    // let data = {}
    const vehicleUpdate = (e) => {
        new_data[e.target.name] = e.target.value
        setNew_data({
            ...new_data
        })
    };

    const updateVehicle = (e) => {
        console.log(new_data)
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            console.log(fleet_id)
            dispatch(updatevehicle ( fleet_id, new_data )
                ).then(() => {
                history.push("/fleet");
                window.location.reload();
              })
              .catch(() => {
                setLoading(false);
              });
          } else {
            setLoading(false);
        }
    };

    return (
        <div>
            <Modal show={props.UpdateModal} onHide={props.closeUpdateModal}>
            <div className="row mt-5 mb-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p className="fleet_modal_title pl-2">Update Vehicle</p>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                {message && (
                    <div className="form-group">
                        <div className={ successful ? "alert alert-success" : "alert alert-success" } role="alert" style={{textTransform:'capitalize'}}>
                            {message}
                        </div>
                    </div>
                )}
                <Form onSubmit={updateVehicle} ref={form}>
                    <div className="register_form">
                    <div className="input_group">
                        <p className="input_title mb-2">Vehicle Type</p>
                        <input 
                            type="text" 
                            className="register_input form-control" 
                            placeholder="Please enter" 
                            name="vehicle_type"
                            onChange={vehicleUpdate} 
                            defaultValue={update.vehicle_type}
                        />
                    </div>
                    <div className="input_group">
                        <p className="input_title mb-2">License Number(Plate Number) </p>
                        <input 
                            type="text" 
                            className="register_input form-control" 
                            placeholder="Please enter" 
                            name="license_number"
                            onChange={vehicleUpdate} 
                            defaultValue={update.license_number}
                        />
                    </div>
                    <div className="input_group">
                        <p className="input_title mb-2">Rider's First Name </p>
                        <input 
                            type="text" 
                            className="register_input form-control" 
                            placeholder="rider's first name" 
                            name="firstname"
                            onChange={vehicleUpdate} 
                            defaultValue={update.firstname}
                        />
                    </div>
                    <div className="input_group">
                        <p className="input_title mb-2">Rider's Last Name</p>
                        <input 
                            type="text" 
                            className="register_input form-control" 
                            placeholder="rider's last name"
                            name="lastname"
                            onChange={vehicleUpdate}  
                            defaultValue={update.lastname}
                        />
                    </div>
                    <div className="input_group">
                        <p className="input_title mb-2">Phone Number</p>
                        <input 
                        type="text" 
                        className="register_input form-control" 
                        placeholder="Enter Phone" 
                        name="phone"
                        onChange={vehicleUpdate}
                        defaultValue={update.phone}
                    />
                    </div>
                    <div className="input_group pt-3 pb-5">
                    <button className="block register_submit">
                        {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                        <span>Update Vehicle</span>
                    </button>
                    </div>
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
                </div>
                <div className="col-md-2"></div>
            </div>
            </Modal>
        </div>
    )
}

export default Updatefleetmodal;