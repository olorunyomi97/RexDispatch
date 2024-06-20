import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import { register } from "../../../redux/general/auth/authActions";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import RegisterSuccess from './registersuccess';
import PhoneInput from 'react-phone-input-international';
import TopNav from '../../partials/topnav';
import SideNav from '../../partials/sidenav';
import './register.css';


const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-success" role="alert">
          This field is required!
        </div>
      );
    }
}; 
  
const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-success" role="alert">
          This is not a valid email.
        </div>
      );
    }
};

const Register = (props) => {
    const prop_data = props.location.state;
    console.log(props)
    const form = useRef();
    const checkBtn = useRef();

    const [firstname, setFirstname] = useState(prop_data !== undefined ? prop_data.firstname : '');
    const [lastname, setLastname] = useState(prop_data !== undefined ? prop_data.lastname : '');
    const [email, setEmail] = useState(prop_data !== undefined ? prop_data.email : '');
    const [phone, setPhone] = useState(prop_data !== undefined ? prop_data.phone : '');
    const [password, setPassword] = useState(prop_data !== undefined ? prop_data.password : '');
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    

    const handleClose = () => {
        setShowSuccessModal(false);
    }

    // const handleShow = () =>  { 
    //     setShowSuccessModal(true);
    // } 

   

    const onChangeFirstname = (e) => {
        const firstname = e.target.value;
        setFirstname(firstname)
    };

    const onChangeLastname = (e) => {
        const lastname = e.target.value;
        setLastname(lastname)
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    // const onChangePhone = (e) => {
    //     const phone = e.target.value;
    //     setPhone(phone);
    // };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) 
        {
            dispatch(register(firstname, lastname, email, phone, password))
              .then(() => {
                props.history.push("/verification", { firstname, lastname, phone, email, password });
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
            <div className="register"> 
                <section>
                    <div className="row">
                        <div className="col-md-4">
                            <SideNav />
                        </div>
                        <div className="col-md-8">
                            <TopNav />
                            
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-3 pr-0">
                                    <p className="register_body pl-2"> Register</p>
                                </div>
                                <div className="col-md-6"></div>
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
                                <Form className="form" onSubmit={handleRegister} ref={form}> 
                                    <div className="register_form">
                                        <div className="input_group">
                                            <p className="input_title mb-2">First Name</p>
                                            <input 
                                                type="text" 
                                                name="firstname"
                                                className="register_input form-control"
                                                placeholder="First Name" 
                                                value={firstname}
                                                onChange={onChangeFirstname}
                                                validations={[required]}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Last Name</p>
                                            <input 
                                                type="text" 
                                                name="lastname"
                                                className="register_input form-control"
                                                placeholder="Last Name" 
                                                value={lastname}
                                                onChange={onChangeLastname}
                                                validations={[required]}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Phone Number</p>
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
                                        <div>
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Email Address</p>
                                            <input 
                                                type="text" 
                                                name="email"
                                                className="register_input form-control"
                                                placeholder="Enter Email" 
                                                value={email}
                                                onChange={onChangeEmail}
                                                validations={[required, validEmail]}
                                            />
                                        </div>
                                        <div className="input_group">
                                            <p className="input_title mb-2">Create A Password</p>
                                            <input 
                                                type="password" 
                                                name="password"
                                                className="register_input form-control"
                                                placeholder="Password" 
                                                value={password}
                                                onChange={onChangePassword}
                                                validations={[required]}
                                                />
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
                                            <button className="block register_submit"> 
                                            {
                                                loading && 
                                                (
                                                    <span className="spinner-border spinner-border-sm mr-2" disabled={message}></span>
                                                )
                                            } 
                                            <span>Register</span></button>
                                            <RegisterSuccess showSuccessModal={showSuccessModal} handleClose={handleClose}/>
                                            <p className="account phone_login">Have an Account? <Link className="link" to="/signin"><span className="account_text" >Log In</span></Link></p>
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
};

export default Register;
