import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from '@material-ui/core'
import Form from "react-validation/build/form";
import { verification } from "../../../redux/general/auth/authActions";
import { reverify } from "../../../redux/general/auth/authActions";
import CheckButton from "react-validation/build/button";
import OtpInput from 'react-otp-input';
// import TopNav from '../../partials/topnav';
import SideNav from '../../partials/sidenav';
import './verification.css';
import VerificationSuccess from './verificationsuccess';


const Verification = (props) => {
    const { firstname, lastname, phone, email, password } = props.location.state;
    console.log(phone);
    const form = useRef();
    const checkBtn = useRef();

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [counter, setCounter] = useState(59);
    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleVerification = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(verification(otp,phone))
              .then(() => {
                props.history.push("/create-parcel");
                // window.location.reload();
              })
              .catch(() => {
                setLoading(false);
              });
          } else {
            setLoading(false);
          }
    };
    const handleReverify = (e) => {
        e.preventDefault();
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(reverify(phone))
        }
    };

    const handleClose = () => {
        setShowSuccessModal(false);
    }

    
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
                    <div className="col-md-4">
                        <SideNav />
                    </div>
                        
                        <div className="col-md-8">
                            {/* <TopNav /> */}
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-7 pr-0 mt-5">
                                    <p className="verification_body">Verify your Account</p>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-7 registration">
                                    <div className="card verification_card">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 pb-5 ">
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
                                                        <OtpInput className="otp_input"
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
                                                    <VerificationSuccess showSuccessModal={showSuccessModal} handleClose={handleClose}/>
                                                </div>
                                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                            </Form>
                                            {/* <Form onSubmit={handleReverify} ref={form} > */}
                                                <Box className="mb-3">
                                                    <Typography fontWeight={500} align="center" color='textSecondary'>
                                                        <span className="link ml-1">
                                                            {(counter > 0) ?  
                                                            <span>
                                                            Resend OTP in  00:{counter}
                                                            </span> 
                                                            :   
                                                            <span> 
                                                                <p className="resend_button"onClick={handleReverify}>Resend OTP </p>
                                                            </span> 
                                                            } 
                                                        </span> 
                                                    </Typography>
                                                </Box>
                                                <p className="pb-3" onClick={() => { props.history.push('/register', { firstname, lastname, phone, email, password } ) }}>Not your number? <span style={{color: "#0BE05C"}} onClick={() => {}}>Change number</span></p>
                                            {/* </Form> */}
                                            
                                            {/* <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-8">
                                                    <p>Didnt get the code?
                                                        <span style={{color: "#0BE05C"}}>
                                                            <button className=" resend_button" to="/"> 
                                                                Resend code 
                                                            </button>
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="col-2"></div>
                                            </div> */}
                                                
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

export default Verification;