import React, { useState, useRef } from "react";
import {  useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { businessregistration } from "../../../redux/business/buisnessauth/BusinessauthAction";
import 'react-phone-input-2/lib/style.css'
import './registerbusiness.css';
import PhoneInput from 'react-phone-input-international'
import TopNav from '../../partials/topnav';
import SideNav from '../../partials/sidenav';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};


const RegisterBusiness = (props) => {
    // const prop_data = props.location.state;

    const form = useRef();
    const checkBtn = useRef(); 

    const [business_name, setBusinessname] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [license, setLicense] = useState('');
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false)
    // const [showModal, setShowModal] = useState(false);
    // const [showVehicleModal, setShowVehicleModal] = useState(false);
    
    // const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeBusinessname = (e) => {
        const business_name = e.target.value;
        setBusinessname(business_name)
    };

    const onChangeLocation = (e) => {
        const location = e.target.value;
        setLocation(location)
    };

    // const onChangePhone = (e) => {
    //     const phone = e.target.value;
    //     setPhone(phone);
    // };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
    };

    const onChangeLicense = (e) => {
        const license = e.target.value;
        setLicense(license);
    };

      
    const handleBusiness = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
        dispatch(businessregistration(business_name, location, phone, email, address, password, license))
          .then(() => {
            props.history.push("/verify-business", { business_name, location, phone, email, address, password, license });
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
            <div>
               <div className="signin">
                    <section>
                        <div className="row">
                            <div className="col-md-4">
                                <SideNav />
                            </div>
                            <div className="col-md-8">
                                <TopNav />
                                {/* Register Input */}
                                <div className="row">
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6 pr-0">
                                        <p className="register_body pl-2">Register your Business,</p>
                                    </div>
                                    <div className="col-md-3"></div>
                                </div>
                                <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 registration">
                                    {message && (
                                        <div className="form-group">
                                        <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                                                {message}
                                            </div>
                                        </div>
                                    )}
                                   <Form onSubmit={handleBusiness} ref={form}>
                                        <div className="register_form">
                                            <div className="input_group">
                                                <p className="input_title mb-2">Business Name</p>
                                                <input 
                                                    type="text" 
                                                    className="register_input form-control" 
                                                    placeholder="Business Name Here" 
                                                    name="business_name"
                                                    value={business_name}
                                                    onChange={onChangeBusinessname}
                                                    validations={[required]}
                                                />
                                            </div>
                                            <div className="input_group">
                                                <p className="input_title mb-2">Email Address</p>
                                                <input 
                                                    type="text" 
                                                    className="register_input form-control" 
                                                    placeholder="Enter Email Address" 
                                                    name="email"
                                                    value={email}
                                                    onChange={onChangeEmail}
                                                    validations={[required]}
                                                />
                                            </div>
                                            <div className="input_group">
                                                <p className="input_title mb-2">Location</p>
                                                <input 
                                                    type="text" 
                                                    className="register_input form-control" 
                                                    placeholder="Enter Location" 
                                                    name="location"
                                                    value={location}
                                                    onChange={onChangeLocation}
                                                    validations={[required]}
                                                />
                                            </div>
                                            <div className="input_group">
                                                <p className="input_title mb-2">Phone Number </p>
                                                    <PhoneInput
                                                    className="register_input form-control"
                                                    placeholder="Phone Number"
                                                    name="phone"
                                                    country='ng'
                                                    value={phone}
                                                    onChange={setPhone}
                                                    validations={[required]}
                                                />
                                            </div>
                                            <div className="input_group">
                                                <p className="input_title mb-2">Resident Address</p>
                                                <input 
                                                    type="text" 
                                                    className="register_input form-control" 
                                                    placeholder="Enter Resident Address" 
                                                    name="address"
                                                    value={address}
                                                    onChange={onChangeAddress}
                                                    validations={[required]}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <p className="input_title mb-2">Attach License</p>
                                                <input 
                                                    type="file" 
                                                    className="register_input form-control file" 
                                                    placeholder="Add License" 
                                                    name="license"
                                                    value={license}
                                                    onChange={onChangeLicense}
                                                    validations={[required]}
                                                />
                                            </div>
                                            <p className="license_info">(png, jpeg format only)</p>
                                            <div className="input_group">
                                                <p className="input_title mb-2">Password</p>
                                                <input 
                                                    className="register_input form-control" 
                                                    placeholder="Enter password" 
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={onChangePassword}
                                                    validations={[required]}
                                                />
                                            </div>
                                            <div className="input_group">
                                                <input 
                                                type="checkbox" 
                                                required="required"
                                                id="terms" 
                                                name="terms" 
                                                value="Bike"
                                                onClick={() => setTermsChecked(!termsChecked)}
                                            />
                                            <label htmlFor="terms"><p className="register_terms mb-2 ml-1 mt-4">I <span className="hide">read and </span>agreed to the <span className="conditions">terms</span> and <span className="conditions">privacy policy</span></p></label><br></br>
                                            </div>
                                            <div className="input_group">
                                                <button className="block register_submit" to="#">
                                                    {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                                                    <span>Register Business</span>
                                                </button>
                                                {/* <RegisterBusinessModal showModal={showModal} modalClose={modalClose} shownextModal={shownextModal}/> 
                                                <RegisterVehicleModal showModal={showVehicleModal} modalClose={modalClose} /> */}
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
            </div>
        );
}
export default RegisterBusiness;