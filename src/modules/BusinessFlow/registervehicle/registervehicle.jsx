import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import { registervehicle } from "../../../redux/business/vehicle/vehicleAction";
import CheckButton from "react-validation/build/button";
import { Link } from 'react-router-dom';
import VehicleModal from './vehiclemodal';
import TopNav from '../../partials/topnav';
import SideNav from '../../partials/sidenav';
import './registervehicle.css'

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-success" role="alert">
          This field is required!
        </div>
      );
    }
};

const Registervehicle = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [showVehicleModal, setShowVehicleModal] = useState(false);

    const modalClose = () => {
        setShowVehicleModal(false);
    }
    // const modalShow =() => {
    //     setShowVehicleModal(true);
    // }

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
        console.log(new_data)
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(registervehicle  ( new_data )
                ).then(() => {
                props.history.push("/subscribe");
                // window.location.reload();
              })
              .catch(() => {
                setLoading(false);
              });
          } else {
            setLoading(false);
        }
    };


    return (
        <div className="vehicle">
                <section>
                    <div className="row">
                    <div className="col-md-4">
                        <SideNav />
                    </div>
                        <div className="col-md-8">
                            <TopNav />
                            
                            <div className="row">
                                <div className="col-3">
                                   {/* <Link className="link" to="/register-business"><p className="back"><i className="fas fa-chevron-left mr-3 hide"></i>Back</p></Link> */}
                                </div>
                                <div className="col-6 pr-0">
                                    <p className="register_body pl-2"> Register your Vehicle</p>
                                </div>
                                <div className="col-3">
                                    <Link className="link" to="/business-account"><p className="back"><span className="skip">Skip</span></p></Link>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 registration">
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
                                            validations={[required]}
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
                                            validations={[required]}
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
                                            validations={[required]} 
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
                                            validations={[required]}
                                        />
                                    </div>
                                    <div className="input_group">
                                        <p className="input_title mb-2">Phone Number</p>
                                        <input 
                                            type="text" 
                                            className="register_input form-control" 
                                            placeholder="+234 7051014243" 
                                            name="phone"
                                            onChange={vehicleChange}
                                            validations={[required]}
                                        />
                                    </div>
                                    <div className="input_group">
                                        <p className="input_title mb-2">Email Address</p>
                                        <input 
                                            type="text" 
                                            className="register_input form-control" 
                                            placeholder="Enter Email" 
                                            name="email"
                                            onChange={vehicleChange}
                                            validations={[required]}
                                        />
                                    </div>
                                    <div className="input_group pt-3">
                                        <div className="input_group pt-3">
                                        <button className="block register_submit">
                                            {loading && (<span className="spinner-border spinner-border-sm mr-2" disabled={message}></span>)} 
                                            <span>Register Vehicle</span>
                                        </button>
                                    </div>
                                    <VehicleModal showVehicleModal={showVehicleModal} modalClose={modalClose}/>
                                    </div>
                                </div>
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                </Form>
                            </div>
                            <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default Registervehicle;