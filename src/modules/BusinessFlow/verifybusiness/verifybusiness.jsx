import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import { Box, Typography } from '@material-ui/core'
import { businessverification } from "../../../redux/business/buisnessauth/BusinessauthAction";
import { reverifybusiness } from "../../../redux/business/buisnessauth/BusinessauthAction";
import CheckButton from "react-validation/build/button";
import { Link } from 'react-router-dom';
import logo from '../../../img/logo/logo.png';
import OtpInput from 'react-otp-input';


const Verifybusiness = (props) => {
    const { business_name, location, phone, email, address, password, license } = props.location.state;
    console.log(phone);
    const form = useRef();
    const checkBtn = useRef();
    
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [counter, setCounter] = useState(59);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleVerification = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(businessverification(otp,phone))
              .then(() => {
                props.history.push("/register-vehicle");
                // window.location.reload();
              })
              .catch(() => {
                setLoading(false);
              });
        } else {
            setLoading(false);
        }
    };
    const handleReverifybusiness = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(reverifybusiness(phone))
            //   .then(() => {
            //     props.history.push("/signin");
            //     // window.location.reload();
            //   })
              .catch(() => {
                setLoading(false);
              });
          } else {
            setLoading(false);
          }
    };

    React.useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div className="">
           <div className="signin">
                <section>
                    <div className="row">
                        <div className="register_column col-md-4">
                            <Link className="register_nav" to="/"> <img src={logo} alt="logo"/>REX DISPATCH</Link>
                            <div className="container pl-5 pt-4 hide">
                                <p className="register_text"></p>
                                <p className="register_text mb-0">Send Parcels</p>
                                <p className="register_text_2 mt-0">with ease.</p>
                                <p className="register_subtext">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            </div>
                            <div className="container hide">
                                <ul className="register_list">
                                    <li>
                                        <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Choose Best Rates</p>
                                    </li>
                                    <li>
                                        <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Send Parcels Easily</p>
                                    </li>
                                    <li>
                                        <p className="register_list_text mb-4"><i className="fas fa-check fa-xs register_icon mr-2" style={{ color: 'white'}}></i>Reliable Riders</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="container hide">
                                <p className="register_footer">© Rex Logistics 2021, All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            {/* Register Nav Section */}
                            <div className="register_navigation row hide">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-3">
                                            {/* <p className="register_navbar">Send Parcels</p> */}
                                            <Link className="register_navbar" to="/create-parcel">Send Parcels</Link>
                                        </div>
                                        <div className="col-md-5">
                                            <Link className="register_navbar" to="/register-business">Register your Business</Link>
                                        </div>
                                        <div className="col-md-3">
                                            <Link className="register_navbar" to="/faq">FAQs</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-3">
                                            {/* <Link className="register_get_started" to="/get-started">Get Started </Link> */}
                                        </div>
                                        <div className="col-md-3">
                                            <Link className="register_log" to="/signin">Sign in</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Register Nav Section */}
                            {/* Register Input */}
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-7 pr-0 mt-3">
                                    <p className="verification_body">Verify your Account</p>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-7 registration">
                                    <div className="card verification_card">
                                    <div className="row pl-3 pr-2">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 pb-5">
                                        {message && (
                                            <div className="form-group mt-3">
                                                <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert" style={{textTransform:'capitalize'}}>
                                                    {message}
                                                </div>
                                            </div>
                                        )}
                                        <Form className="d-flex flex-column align-center justify-content-center" onSubmit={handleVerification} ref={form}>
                                                <p className="modal_text pt-5">User Verification</p>
                                                <p className="">Enter the OTP we have sent to <span className="link">+{ phone }</span></p>
                                                <div className="col-12 pt-3 pb-5 ">
                                                    <div style={{ textAlign: "center"}} className="d-flex justify-content-center">
                                                        <OtpInput className=" "
                                                            value={otp}
                                                            onChange={setOtp}
                                                            numInputs={4}
                                                            separator={<span>&nbsp;&nbsp;&nbsp;</span>}
                                                            inputStyle={{
                                                                width: "3rem",
                                                                height: "3rem",
                                                                margin: "0 0.5rem",
                                                                fontSize: "1.5rem",
                                                                borderRadius: 4,
                                                                border: "2px solid #0BE05C",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-12">
                                                    <button className="block register_submit mb-4 " to="#" >
                                                    {loading && (<span className="spinner-border spinner-border-sm mr-2"></span>)} 
                                                    <span>Complete registration</span></button>
                                                    {/* <VerificationSuccess showSuccessModal={showSuccessModal} handleClose={handleClose}/> */}
                                                </div>
                                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                                {/* <p className="pb-3" onClick={() => { props.history.push('/register-business', { business_name, location, phone, email, address, password, license } ) }}>Not your number? <span style={{color: "#0BE05C"}} onClick={() => {}}>Change number</span></p> */}
                                            </Form>
                                            <Form onSubmit={handleReverifybusiness} ref={form}>
                                                <Box className="mb-3">
                                                    <Typography fontWeight={500} align="center" color='textSecondary'>
                                                        <span className="link ml-1" style={{fontWeight:""}}>
                                                            {(counter > 0) ?  
                                                            <span>
                                                            Resend OTP in  00:{counter}
                                                            </span> 
                                                            :   
                                                            <span> 
                                                                <button className="resend_button">Resend OTP </button>
                                                            </span> 
                                                            } 
                                                        </span> 
                                                    </Typography>
                                                </Box>
                                                <p className="pb-3" onClick={() => { props.history.push('/register-business', { business_name, location, phone, email, address, password, license  } ) }}>Not your number? <span style={{color: "#0BE05C"}} onClick={() => {}}>Change number</span></p>
                                            </Form>
                                        {/* <Form onSubmit={handleReverify} ref={form}>
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-8">
                                                    <p>Didnt get the code?<span style={{color: "#0BE05C"}}><button className=" resend_button" to="/"> Resend code </button></span></p>
                                                </div>
                                                <div className="col-2"></div>
                                            </div>
                                            <p className="pb-3">Not your number? <span style={{color: "#0BE05C"}}><Link className="link"to="/">Change number</Link></span></p>
                                        </Form> */}
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-3"></div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div> 
        </div>
    )
}

export default Verifybusiness;