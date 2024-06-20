import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Form from "react-validation/build/form";
import { registervehicle } from "../../../../redux/business/vehicle/vehicleAction";
import CheckButton from "react-validation/build/button";
import { Modal } from "react-bootstrap";
// import { Link } from "react-router-dom";

const Fleetmodal = (props) => {
    // const { rider_id } = props;
    // console.log(rider_id);
    const form = useRef();
    const checkBtn = useRef();
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const history = useHistory();

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const [new_data, setNew_data] = useState({})
    let data = {}
    const vehicleChange = (e) => {
        new_data[e.target.name] = e.target.value
        console.log(data)
        setNew_data({
             ...new_data
        })
    };

    const handleVehicle = (e) => {
        // console.log(new_data)
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) 
        {
            dispatch(registervehicle
                (new_data)
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
            <Modal className="modal-popup" size="lg" show={props.showFleetModal} onHide={props.modalClose}>
            <div className="row mt-5 mb-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p className="fleet_modal_title pl-2"> Register Vehicle</p>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    {message && (
                        <div className="form-group">
                            <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert" style={{textTransform:'capitalize'}}>
                                {message}
                            </div>
                        </div>
                    )}
                    <Form onSubmit={handleVehicle} ref={form}>
                        <div className="register_form">
                        <div className="input_group">
                            <p className="input_title mb-2">Vehicle Type</p>
                            <input 
                                type="text" 
                                className="register_input form-control" 
                                placeholder="Please enter"
                                name="vehicle_type"
                                onChange={vehicleChange} 
                            />
                        </div>
                        <div className="input_group">
                            <p className="input_title mb-2">License Number(Plate Number) </p>
                            <input 
                                type="text" 
                                className="register_input form-control" 
                                placeholder="Please enter" 
                                name="license_number"
                                onChange={vehicleChange}
                            />
                        </div>
                        <div className="input_group">
                            <p className="input_title mb-2">Rider's First Name </p>
                            <input 
                                type="text" 
                                className="register_input form-control" 
                                placeholder="rider's first name"
                                name="firstname"
                                onChange={vehicleChange} 
                            />
                        </div>
                        <div className="input_group">
                            <p className="input_title mb-2">Rider's Last Name</p>
                            <input 
                                type="text" 
                                className="register_input form-control" 
                                placeholder="rider's last name" 
                                name="lastname"
                                onChange={vehicleChange}
                            />
                        </div>
                        <div className="input_group">
                            <p className="input_title mb-2">Phone Number</p>
                            <input 
                                type="text" 
                                className="register_input form-control" 
                                placeholder="Enter Phone" 
                                name="phone"
                                onChange={vehicleChange}
                            />
                        </div>
                        <div className="input_group pt-3 pb-5">
                            {/* <Link className="block register_submit" to="#" onClick={props.shownextModal}>Register Vehicle</Link> */}
                            <button className="block register_submit">
                                {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                                <span>Register Vehicle</span>
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

export default Fleetmodal